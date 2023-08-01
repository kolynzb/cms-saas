import 'package:mobile/widgets/on_boarding.dart';
import 'package:flutter/material.dart';

class OnBoardingScreen extends StatelessWidget {
  const OnBoardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return OnboardingPage(
      pages: [
        OnboardingPageModel(
          title: 'Fast, Fluid and Secure',
          description: 'Enjoy the best of the world in the palm of your hands.',
          image: 'assets/image0.png',
          bgColor: Colors.indigo,
        ),
        OnboardingPageModel(
          title: 'Connect with your friends.',
          description: 'Connect with your friends anytime anywhere.',
          image: 'assets/image1.png',
          bgColor: const Color.fromARGB(255, 0, 105, 82),
        ),
        OnboardingPageModel(
          title: 'Bookmark your favorite',
          description:
              'Bookmark your favorite quotes to read at a leisure time.',
          image: 'assets/image2.png',
          bgColor: const Color(0xfffeae4f),
        ),
        OnboardingPageModel(
          title: 'Follow creators',
          description: 'Follow your favorite creators to stay in the loop.',
          image: 'assets/image3.png',
          bgColor: Colors.purple,
        ),
      ],
    );
  }
}
