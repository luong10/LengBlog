-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2022 at 05:00 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descc` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `uid` int(11) NOT NULL,
  `cat` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `descc`, `img`, `date`, `uid`, `cat`) VALUES
(6, 'Chất Liệu Làm Tranh Cát Nghệ Thuật', '<p>Để tạo ra một tác phẩm tranh cát nghệ thuật, chất liệu quan trọng nhất được sử dụng chắc chắn phải kể đến là cát. Đất nước Việt Nam ta sở hữu đường bờ biển dài hơn 3.000 km2, do đó không khó trong việc tìm nguyên liệu cát để làm tranh. Ngoài cát biển thường được lấy tại Phan Thiết hoặc bờ biển miền Trung Nam Bộ, người nghệ nhân còn có thể sử dụng cát từ sông, suối, tuy nhiên, loại cát được sử dụng phải thật mịn và được lọc sạch tạp chất. Do đó người họa cát khi chọn mua cát cần xem kỹ bề mặt của cát.</p><p><br></p><p>Ngoài độ mịn thì cần quan tâm màu sắc của cát để tạo nên sự sống động và tính chân thực cho tác phẩm tranh cát. Khi mua tranh nên chọn những loại cát có màu sắc càng tự nhiên càng tốt. Nước ta hiện nay được thống kê có khoảng 81 màu cát tự nhiên, nhưng với yêu cầu về tính đa dạng và yếu tố tả thực trong tranh thì con số này vẫn còn khá ít ỏi. Do đó người ta đã nghĩ ra cách nhuộm cát để có được màu sắc mong muốn. Trong quá trình chọn mua cát nhân tạo, để&amp;</p>', '1668159633549nghe-thuat-tranh-cat.jpg', '2022-11-09', 6, 'art'),
(7, 'Công nghệ truyền dữ liệu bằng laser giúp tốc độ internet nhanh hơn 1.000 lần', '<p>Các nhà khoa học vừa tìm ra cách truyền dữ liệu mới giúp tốc độ internet đạt đến mức nhanh kinh ngạc.</p><p>Trong nghiên cứu mới được công bố trên Tạp chí Nature Communications, các nhà khoa học ở Đại học Leeds (Anh Quốc) cho biết sẽ giúp internet tiến thêm một bước mới nhờ vào công nghệ truyền dữ liệu siêu tốc qua tia laser ở mức độ lượng tử.</p><p>Trong phòng thí nghiệm, tốc độ truyền tải đã đạt đến 100 megabit mỗi giây, tức là nhanh hơn hàng ngàn lần so với tốc độ trung bình hiện tại.</p>', '1668174724082truyen-du-lieu-bang-laser-1.jpg', '2022-11-09', 6, 'science'),
(8, 'Điện thoại di động 80 năm trước trông thế nào?', '<p class=\"ql-align-justify\"><strong>Một bộ phim từ những năm 1940 cho thấy cách vận hành, sử dụng điện thoại di động khác xa hiện nay.</strong></p><p class=\"ql-align-justify\">Năm 1979, Nippon Telegraph and Telephone (NTT), một nhà mạng của Nhật đã ra mắt mạng di động đầu tiên. Trước đó 6 năm, chiếc điện thoại di động cầm tay đầu tiên được Motorola giới thiệu.</p><p class=\"ql-align-justify\">Đây được xem là cột mốc lịch sử của ngành viễn thông nói chung. Tuy nhiên nếu bạn chưa biết, điện thoại di động đã xuất hiện từ trước đó hàng chục năm. Một đoạn phim do Bell Telephone thực hiện vào những năm 1940 đã cho chúng ta thấy chúng tồn tại như thế nào.</p><p><br></p>', '1668175028913dien-thoai-di-dong.jpg', '2022-11-09', 6, 'food'),
(9, 'Avatar Và Hậu Trường Chưa Kể', '<p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(67, 70, 75);\">Avatar: The Way Of Water</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(67, 70, 75);\"> dự kiến ra mắt vào tháng 12.2022. Vẫn còn quá sớm để đưa ra bình luận, tuy nhiên đối với James Cameron thì chuyện điên rồ nào cũng có thể xảy ra. Trước khi có cơ hội chiêm ngưỡng hành tinh Pandora tuyệt đẹp, hãy cùng khám phá một số thông tin hậu trường thú vị về Avatar. </span></p><p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(67, 70, 75);\">Kịch Bản Được Chấp Bút Từ Năm 1994 </strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(67, 70, 75);\">Thực tế, từ những năm 70 của thế kỷ trước, James Cameron đã bắt đầu nảy sinh những ý tưởng về việc tạo nên một bộ phim mang tầm vóc vĩ đại, thậm chí sẽ là bước ngoặt thay đổi ngành công nghiệp phim ảnh. Đến năm 1994, ông bắt đầu viết những trang kịch bản đầu tiên của Avatar. Cứ thế, Cameron liên tục chỉnh sửa và chờ đợi cho', '16681756298361135-3_1667726541668.jpg', '2022-11-09', 5, 'cinema'),
(10, 'Mách bạn 10 địa chỉ bán cốm Hà Nội ‘chuẩn làng Vòng’ nổi tiếng', '<h3 class=\"ql-align-justify\">1. Cốm mộc Lê Gia Hà Nội</h3><ul><li class=\"ql-align-justify\">Địa chỉ:&nbsp;Số 2 ngõ 59 Mễ Trì – P. Mễ Trì – Q.Nam Từ Liêm – Tp.Hà Nội</li></ul><p class=\"ql-align-justify\">Địa chỉ cốm Hà Nội đầu tiên mà bạn nên ghé đến đó là cốm mộc Lê Gia. Đây được xem là một trong những địa chỉ còn sở hữu vị cốm chuẩn thời xưa. Côm ở Lê Gia vô cùng đa dạng, chế biến nhiều món khác nhau. Từ Cốm tươi, Cốm sấy khô,… đến các món như bánh Cốm, chả Cốm, rượu Cốm, xôi Cốm,… Đặc biệt, cốm nơi này luôn đảm bản chất lượng vì nằm ngay tại làng Vòng nổi tiếng.</p><p><br></p>', '1668175909276tranglady97_73546075_154498445802883_4245737081607811663_n-1024x1024.jpg', '2022-11-09', 5, 'food'),
(11, 'Canva là gì? Hướng dẫn sử dụng Canva cho người mới', '<h3><strong>Canva là gì?</strong></h3><p>Canva được biết đến là một phần mềm thiết kế online với các thao tác đơn giản, nhanh chóng mà bạn không cần phải biết nhiều kỹ năng thiết kế như các phần mềm chuyên dụng Photoshop, AI,…</p><p>Đến với Canva, người dùng thỏa thích khám phá một kho dữ liệu khổng lồ, hoàn toàn miễn phí với hàng loạt mẫu thiết kế được phân chia theo mục như:&nbsp;<a href=\"https://wiki.tino.org/poster-la-gi/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(52, 211, 100);\">Poster</a>, CV, Logo, bài đăng Facebook, bài đăng Instagram, áp phích, Video, bài thuyết trình, thư mời, hình ảnh thông tin bằng đồ họa,… mà bạn có thể tùy ý sử dụng. Giao diện thiết kế của Canva cũng vô cùng đơn giản, bắt mắt, phù hợp với hầu hết mọi người, thậm chí những người thiết kế không chuyên.</p><p>Sản phẩm sau khi thiết kế và chỉnh sửa, bạn có thể tải chúng về máy bằng nhiều định dạng file khác nhau như: JPG, PNG, PDF.</p><p>Hệ thống tài khoản Canva hỗ trợ người dùng hai phiên b', '1668176126696word-image-241.jpeg', '2022-11-11', 5, 'design'),
(12, 'Chuyển đổi số là gì? Các bước chuyển đổi số của doanh nghiệp 2022', '<h3>Khái niệm “chuyển đổi số”</h3><p>“Chuyển đổi số” còn được biết đến qua tên tiếng Anh là “<a href=\"https://en.wikipedia.org/wiki/Digital_transformation\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(22, 167, 75); background-color: transparent;\"><strong>Digital Transformation</strong></a><strong>”&nbsp;</strong>– hiện đang là xu hướng thịnh hành trên toàn thế giới.</p><p>Dù “chuyển đổi số” là cụm từ được nhắc và sử dụng phổ biến trong thời đại công nghệ 4.0, nhưng thật khó để đưa ra một khái niệm chuẩn nhất về thuật ngữ này. Ứng dụng vào từng lĩnh vực, chuyển đổi số sẽ mang đến các cách vận hành, kết quả khác nhau. Không chỉ có vai trò quan trọng tại các doanh nghiệp, chuyển đổi số còn đóng vai trò quan trọng trong các lĩnh vực khác của xã hội như chính phủ, truyền thông đại chúng, y học, khoa học…</p>', '1668176235083chuyen-doi-so-la-gi-1.jpg', '2022-11-11', 5, 'technology');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `img`) VALUES
(4, 'Luffy', 'test@gmail.com', 'test', 'https://img.icons8.com/plasticine/100/null/user-male-circle.png'),
(5, 'Nami', 'test2@gmail.com', 'test', 'https://img.icons8.com/plasticine/100/null/user-male-circle.png'),
(6, 'Sanji', 'test3@gmail.com', 'test', 'https://img.icons8.com/plasticine/100/null/user-male-circle.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_ibfk_1` (`uid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
