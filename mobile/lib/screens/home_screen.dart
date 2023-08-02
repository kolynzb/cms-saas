import 'package:flutter/material.dart';
import 'package:mobile/widgets/side_menu.dart';
import 'package:ternav_icons/ternav_icons.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        // backgroundColor: Colors.transparent,
        iconTheme: const IconThemeData(color: Colors.grey, size: 28),
        actions: [
          IconButton(
            onPressed: () {},
            icon: Icon(
              TernavIcons.lightOutline.search,
              color: Colors.grey,
            ),
          ),
          IconButton(
            onPressed: () {},
            icon: Icon(
              TernavIcons.lightOutline.bell_2,
              color: Colors.grey,
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 5, right: 16, bottom: 5),
            child: const CircleAvatar(
              backgroundImage: NetworkImage(
                  "https://res.cloudinary.com/kolynz-b/image/upload/v1638636909/ko.lynz_b_218871186_831566384142117_7643572219233961744_n_wcsj3e.jpg"),
            ),
          )
        ],
      ),
      drawer: const SideMenu(),
    );
  }
}
