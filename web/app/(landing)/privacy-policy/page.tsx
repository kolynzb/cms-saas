import markdownToHtml, { getFileContentByPath } from "@utils/md";

const PrivacyPolicy = async () => {
  const privacyData = getFileContentByPath("PrivacyPolicy", "content/privacy");
  const content = await markdownToHtml(privacyData.content || "");

  return (
    <>
      <div className="axil-privacy-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content">
                <div className="inner">
                  <div className="section-title">
                    <h4 className="title">{privacyData.data.sTitle}</h4>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
