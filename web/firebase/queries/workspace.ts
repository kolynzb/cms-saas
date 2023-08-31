import { firestore, storage } from "@config/firebase";
import { IWorkspace } from "@firebase/interfaces";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export const workspaceCollectionRef = collection(firestore, "workspaces");

export const createCompanyWorkspace = async (
  workspaceData: Partial<IWorkspace>,
  userID: string,
  displayImageFile: string
) => {
  const docRef = await addDoc(workspaceCollectionRef, {
    user: userID,
    workspaceType: "company",
    createdAt: serverTimestamp(),
    ...workspaceData,
  });

  const displayImageRef = ref(storage, `workspaces/${docRef.id}/image`);

  await uploadString(displayImageRef, displayImageFile, "data_url").then(
    async (snapshot) => {
      const downloadURL = await getDownloadURL(displayImageRef);

      await updateDoc(doc(firestore, "workspaces", docRef.id), {
        displayImage: downloadURL,
      });
    }
  );
};

export const createPersonalWorkspace = async (user: User) => {
  const docRef = await addDoc(workspaceCollectionRef, {
    user: user.uid,
    displayImage: user.photoURL,
    workspaceType: "personal",
    createdAt: serverTimestamp(),
  });
};

// https://youtu.be/a6Xs2Ir40OI   4:32:30
export const getWorkspaces = async () => {
  const workspaceQuery = query(
    workspaceCollectionRef,
    orderBy("createdAt", "desc")
  );
  //   const workspaceSnapshot = await getDocs(workspaceQuery);
  const workspaceSnapshot = await getDocs(workspaceQuery);
  return workspaceSnapshot;
};

export const getWorkspace = async (workspaceId: string) => {
  const workspaceDocRef = doc(firestore, "workspaces", workspaceId);
};

export const updateWorkspace = async (
  workspaceId: string,
  newWorkspaceData: Partial<IWorkspace>
) => {
  const workspaceRef = doc(firestore, "workspaces", workspaceId);
  return updateDoc(workspaceRef, {
    updatedAt: serverTimestamp(),
    ...newWorkspaceData,
  });
};

export const deleteWorkspace = async (workspaceId: string) => {
  const workspaceDocRef = doc(firestore, "workspaces", workspaceId);
  return deleteDoc(workspaceDocRef);
};
