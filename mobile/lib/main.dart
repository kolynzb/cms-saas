import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile/screens/home_screen.dart';
import 'package:mobile/screens/on_boarding_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

int? isViewed;
void main() async {
  SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
    statusBarColor: Colors.transparent,
  ));
  WidgetsFlutterBinding.ensureInitialized();
  SharedPreferences prefs = await SharedPreferences.getInstance();
  isViewed = prefs.getInt('onBoard');
  runApp(const CRMApp());
}

class CRMApp extends StatefulWidget {
  const CRMApp({super.key});

  @override
  _CRMAppState createState() => _CRMAppState();
}

class _CRMAppState extends State<CRMApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // debugShowCheckedModeBanner: false,
      title: 'CMS Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: isViewed != 0 ? const OnBoardingScreen() : const HomeScreen(),
    );
  }
}
