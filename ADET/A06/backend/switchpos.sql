-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 10:13 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `switchpos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(100) NOT NULL,
  `name` varchar(500) NOT NULL,
  `displayIcon` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`, `displayIcon`) VALUES
(1, 'coffee', 'coffee.svg'),
(2, 'tea', 'tea.svg'),
(3, 'pastries', 'pastries.svg');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(100) NOT NULL,
  `categoryID` int(100) NOT NULL,
  `name` varchar(500) NOT NULL,
  `displayIcon` varchar(500) NOT NULL,
  `code` varchar(100) NOT NULL,
  `isAvailable` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `displayIcon`, `code`, `isAvailable`) VALUES
(1, 1, 'Espresso', 'espresso.png', 'ESP', 1),
(2, 1, 'Americano', 'americano.png', 'AMR', 1),
(3, 1, 'Cappuccino', 'cappuccino.png', 'CAP', 1),
(4, 1, 'Latte', 'latte.png', 'LAT', 1),
(5, 1, 'Mocha', 'mocha.png', 'MOCH', 1),
(6, 1, 'Flat White', 'flat-white.png', 'FLAT', 1),
(7, 1, 'Cold Brew', 'cold-brew.png', 'CLDBRW', 1),
(8, 1, 'Macchiato', 'macchiato.png', 'MACC', 1),
(9, 1, 'Iced Coffee', 'iced-coffee.png', 'ICED', 1),
(10, 2, 'Green Tea', 'green-tea.png', 'GRN-TEA', 1),
(11, 2, 'Earl Grey', 'earl-grey.png', 'EARL', 1),
(12, 2, 'Chai Tea Latte', 'chai-tea-latte.png', 'CHAI', 1),
(13, 2, 'English Breakfast', 'english-breakfast.png', 'ENG-BRK', 1),
(14, 2, 'Hibiscus Tea', 'hibiscus-tea.png', 'HIBI', 1),
(15, 2, 'Jasmine Tea', 'jasmine-tea.png', 'JASM', 1),
(16, 3, 'Croissant', 'croissant.png', 'CROI', 1),
(17, 3, 'Chocolate Muffin', 'chocolate-muffin.png', 'CHOC-MUF', 1),
(18, 3, 'Cinnamon Roll', 'cinnamon-roll.png', 'CIN-RLL', 1),
(19, 3, 'Cheese Danish', 'cheese-danish.png', 'CH-DAN', 1),
(20, 3, 'Blueberry Cheesecake', 'blueberry-cheesecake.png', 'BLU-CHE', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `sizeID` int(100) NOT NULL,
  `name` varchar(500) NOT NULL,
  `code` varchar(500) NOT NULL,
  `price` float(6,2) NOT NULL,
  `productID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`sizeID`, `name`, `code`, `price`, `productID`) VALUES
(1, 'Tall', 'T', 190.00, 1),
(2, 'Grande', 'G', 239.00, 1),
(3, 'Venti', 'V', 249.00, 1),
(4, 'Tall', 'T', 160.00, 2),
(5, 'Grande', 'G', 199.00, 2),
(6, 'Venti', 'V', 209.00, 2),
(7, 'Tall', 'T', 180.00, 3),
(8, 'Grande', 'G', 229.00, 3),
(9, 'Venti', 'V', 239.00, 3),
(10, 'Tall', 'T', 185.00, 4),
(11, 'Grande', 'G', 235.00, 4),
(12, 'Venti', 'V', 245.00, 4),
(13, 'Tall', 'T', 195.00, 5),
(14, 'Grande', 'G', 245.00, 5),
(15, 'Venti', 'V', 255.00, 5),
(16, 'Tall', 'T', 190.00, 6),
(17, 'Grande', 'G', 235.00, 6),
(18, 'Venti', 'V', 245.00, 6),
(19, 'Tall', 'T', 185.00, 7),
(20, 'Grande', 'G', 225.00, 7),
(21, 'Venti', 'V', 235.00, 7),
(22, 'Tall', 'T', 190.00, 8),
(23, 'Grande', 'G', 239.00, 8),
(24, 'Venti', 'V', 249.00, 8),
(25, 'Tall', 'T', 175.00, 9),
(26, 'Grande', 'G', 220.00, 9),
(27, 'Venti', 'V', 230.00, 9),
(28, 'Tall', 'T', 170.00, 10),
(29, 'Grande', 'G', 219.00, 10),
(30, 'Venti', 'V', 229.00, 10),
(31, 'Tall', 'T', 165.00, 11),
(32, 'Grande', 'G', 215.00, 11),
(33, 'Venti', 'V', 225.00, 11),
(34, 'Tall', 'T', 180.00, 12),
(35, 'Grande', 'G', 229.00, 12),
(36, 'Venti', 'V', 239.00, 12),
(37, 'Tall', 'T', 165.00, 13),
(38, 'Grande', 'G', 215.00, 13),
(39, 'Venti', 'V', 225.00, 13),
(40, 'Tall', 'T', 175.00, 14),
(41, 'Grande', 'G', 220.00, 14),
(42, 'Venti', 'V', 230.00, 14),
(43, 'Tall', 'T', 170.00, 15),
(44, 'Grande', 'G', 219.00, 15),
(45, 'Venti', 'V', 229.00, 15),
(46, 'Regular', 'R', 95.00, 16),
(47, 'Regular', 'R', 105.00, 17),
(48, 'Regular', 'R', 110.00, 18),
(49, 'Regular', 'R', 115.00, 19),
(50, 'Regular', 'R', 105.00, 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`sizeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `sizeID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
