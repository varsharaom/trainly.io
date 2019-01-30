-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 11, 2017 at 07:20 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TRAINLYIO`
--

DROP DATABASE IF EXISTS TRAINLYIO;
CREATE DATABASE TRAINLYIO;
USE TRAINLYIO;
-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `AdminID` int(11) NOT NULL,
  `AdminEmail` varchar(255) DEFAULT NULL,
  `Fname` varchar(255) DEFAULT NULL,
  `Lname` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `ProfilePic` varchar(255) DEFAULT NULL,
  `Street` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  `PostalCode` varchar(5) DEFAULT NULL,
  `PermittedBy` int(11) DEFAULT NULL,
  `PermittedDate` date DEFAULT NULL,
  `PermittedTime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Admin`
--

INSERT INTO `Admin` (`AdminID`, `AdminEmail`, `Fname`, `Lname`, `Password`, `ProfilePic`, `Street`, `City`, `Country`, `PostalCode`, `PermittedBy`, `PermittedDate`, `PermittedTime`) VALUES
(101, 'chang.chen2@husky.neu.edu', 'Chang', 'Chen', '0702', 'images/profile_pic.png', '85 Trevalley Rd', 'Revere', 'USA', '02151', 101, '2017-10-01', '00:00:00'),
(105, 'john.smith@gmail.com', 'John', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No 1711 22 Park Drive', 'Boston', 'USA', '02120', 101, '2017-10-02', '17:05:00'),
(108, 'ian.smith@gmail.com', 'Ian', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '303 Huntington Ave', 'Boston', 'USA', '02115', 109, '2017-10-03', '14:05:00'),
(109, 'harry.potter@gmail.com', 'Harry', 'Potter', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'New England Street', 'London', 'England', '01421', 105, '2017-10-02', '17:10:00'),
(111, 'chris.grey@gmail.com', 'Chris', 'Grey', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No 5 Mission Main Department', 'Boston', 'USA', '02180', 109, '2017-10-04', '01:15:00'),
(114, 'taylor.swift@gmail.com', 'Taylor', 'Swift', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '234 Hollywood Blvd', 'Los Angeles', 'USA', '01021', 108, '2017-10-06', '10:15:00'),
(116, 'robert.garfield@gmail.com', 'Robert', 'Garfield', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '121 Hollywood Blvd', 'Los Angeles', 'USA', '01021', 111, '2017-10-04', '01:18:00'),
(118, 'nicholas.anderson@gmail.com', 'Nicholas', 'Anderson', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '25 SuperStar Street', 'Boston', 'USA', '02120', 120, '2017-12-01', '11:30:00'),
(119, 'helen.smith@gmail.com', 'Helen', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '1211 Hollywood Blvd', 'Los Angeles', 'USA', '01021', 120, '2017-12-06', '10:15:00'),
(120, 'bruno.mars@gmail.com', 'Bruno', 'Mars', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '124 South Avenue', 'Georgia', 'USA', '03421', 114, '2017-11-01', '11:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `Belongs_To`
--

CREATE TABLE `Belongs_To` (
  `CourseID` varchar(255) NOT NULL,
  `QuestionID` varchar(255) NOT NULL,
  `MaterialName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Belongs_To`
--

INSERT INTO `Belongs_To` (`CourseID`, `QuestionID`, `MaterialName`) VALUES
('003', '3', 'Background of animal-1'),
('005', '4', 'Quadratic Equations Basics'),
('006', '10', 'Difficult as hell-3'),
('006', '5', 'Easy math-1'),
('006', '6', 'Easy math-2'),
('006', '7', 'Easy math-3'),
('006', '8', 'Difficult as hell-1'),
('006', '9', 'Difficult as hell-2'),
('009', '1', 'Background of web-1'),
('010', '2', 'Background of java-1');

-- --------------------------------------------------------

--
-- Table structure for table `Completes_Material`
--

CREATE TABLE `Completes_Material` (
  `CourseID` varchar(255) NOT NULL,
  `StudentID` int(11) NOT NULL,
  `MaterialName` varchar(255) NOT NULL,
  `Date` date DEFAULT NULL,
  `Time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Completes_Material`
--

INSERT INTO `Completes_Material` (`CourseID`, `StudentID`, `MaterialName`, `Date`, `Time`) VALUES
('003', 107, 'Background of zoo-1', '2017-03-11', '01:15:34'),
('003', 112, 'Background of human-3', '2016-12-29', '11:35:34'),
('006', 106, 'Background of math-1', '2016-12-11', '10:15:34'),
('006', 106, 'Difficult as hell-3', '2016-03-14', '08:15:34'),
('006', 113, 'Easy math-3', '2017-05-10', '10:15:34'),
('007', 107, 'Quadratic Equations Basics', '2016-04-17', '10:15:34'),
('009', 107, 'Background of web-3', '2017-12-11', '12:26:35'),
('009', 107, 'HTML-1', '2017-12-11', '12:26:32'),
('009', 107, 'HTML-2', '2017-12-11', '12:26:33'),
('009', 107, 'HTML-3', '2017-12-11', '12:26:36'),
('009', 107, 'PHP-1', '2017-12-11', '12:26:35'),
('009', 107, 'PHP-2', '2017-12-11', '12:26:34'),
('009', 107, 'PHP-3', '2017-12-11', '12:26:37'),
('009', 112, 'Background of web-1', '2017-06-21', '11:15:34'),
('009', 112, 'Background of web-2', '2016-12-25', '12:45:34'),
('010', 113, 'Background of java-1', '2017-01-23', '06:15:34'),
('010', 113, 'Background of java-2', '2017-12-14', '09:15:34');

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

CREATE TABLE `Course` (
  `CourseID` varchar(255) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Cost` float DEFAULT NULL,
  `Icon` varchar(255) DEFAULT NULL,
  `PrimaryTopic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Course`
--

INSERT INTO `Course` (`CourseID`, `Name`, `Description`, `Cost`, `Icon`, `PrimaryTopic`) VALUES
('001', 'Physics', 'Basic Concepts of Physics', 5000, 'images/course_icon.png', 'Atoms'),
('002', 'Chemistry', 'Basic Concepts of Chemistry', 5000, 'course_icon.png', 'Periodic Table'),
('003', 'Zoology', 'Basic Concepts of Zoology', 6000, 'course_icon.png', 'Animal Kingdom'),
('004', 'Botany', 'Basic Concepts of Botany', 5000, 'course_icon.png', 'Plants'),
('005', 'Algebra', 'Basic Concepts of Algebra', 7000, 'course_icon.png', 'Quadratic Equations'),
('006', 'Geometry', 'Basic Concepts of Geometry', 5000, 'course_icon.png', '3D Geometry'),
('007', 'Arithmetics', 'Basic Concepts of Arithmetics', 5000, 'course_icon.png', 'Arithmetic Progressions'),
('008', 'Databases', 'Basic Concepts of Databases', 5000, 'course_icon.png', 'Relational Database'),
('009', 'Web Development', 'Basic Concepts of Web Development', 4500, 'course_icon.png', 'HTML5'),
('010', 'Java', 'Basic Concepts of Java', 5000, 'course_icon.png', 'Periodic Classes');

-- --------------------------------------------------------

--
-- Table structure for table `Course_Material`
--

CREATE TABLE `Course_Material` (
  `MaterialName` varchar(255) NOT NULL,
  `CourseID` varchar(255) NOT NULL,
  `CourseOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Course_Material`
--

INSERT INTO `Course_Material` (`MaterialName`, `CourseID`, `CourseOrder`) VALUES
('Background of animal-1', '003', 2),
('Background of animal-2', '003', 5),
('Background of animal-3', '003', 8),
('Background of human-1', '003', 3),
('Background of human-2', '003', 6),
('Background of human-3', '003', 9),
('Background of java-1', '010', 1),
('Background of java-2', '010', 2),
('Background of java-3', '010', 3),
('Background of math-1', '006', 1),
('Background of math-2', '006', 4),
('Background of math-3', '006', 7),
('Background of web-1', '009', 1),
('Background of web-2', '009', 4),
('Background of web-3', '009', 7),
('Background of zoo-1', '003', 1),
('Background of zoo-2', '003', 4),
('Background of zoo-3', '003', 7),
('Difficult as hell-1', '006', 3),
('Difficult as hell-2', '006', 6),
('Difficult as hell-3', '006', 9),
('Easy math-1', '006', 2),
('Easy math-2', '006', 5),
('Easy math-3', '006', 8),
('HTML-1', '009', 2),
('HTML-2', '009', 5),
('HTML-3', '009', 8),
('PHP-1', '009', 3),
('PHP-2', '009', 6),
('PHP-3', '009', 9),
('Quadratic Equations Basics', '005', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Course_Question`
--

CREATE TABLE `Course_Question` (
  `QuestionID` varchar(255) NOT NULL,
  `CourseID` varchar(255) NOT NULL,
  `CourseQuestion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Course_Question`
--

INSERT INTO `Course_Question` (`QuestionID`, `CourseID`, `CourseQuestion`) VALUES
('1', '009', 'Why did I take this course?'),
('10', '006', 'Do we have class tomorrow?'),
('2', '010', 'What do I expect to learn from this course?'),
('3', '003', 'Why does the teacher hate me?'),
('4', '005', 'When is the second assignment due?'),
('5', '006', 'What is the syllabus for test 1?'),
('6', '006', 'When is the midterm?'),
('7', '006', 'Do we have a class today?'),
('8', '006', 'When is hw1 due?'),
('9', '006', 'When is hw3 due?');

-- --------------------------------------------------------

--
-- Table structure for table `Creates`
--

CREATE TABLE `Creates` (
  `FacultyID` int(11) NOT NULL,
  `CourseID` varchar(255) NOT NULL,
  `CreationDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Creates`
--

INSERT INTO `Creates` (`FacultyID`, `CourseID`, `CreationDate`) VALUES
(107, '003', '2011-01-01'),
(107, '008', '2013-01-01'),
(107, '010', '2010-01-01'),
(108, '004', '2010-01-01'),
(108, '005', '2012-01-01'),
(109, '006', '2012-01-01'),
(109, '009', '2009-01-01'),
(112, '007', '2011-01-01'),
(112, '008', '2011-01-01'),
(120, '001', '2011-01-01'),
(120, '002', '2012-01-01');

-- --------------------------------------------------------

--
-- Table structure for table `Download`
--

CREATE TABLE `Download` (
  `MaterialName` varchar(255) NOT NULL,
  `CourseID` varchar(255) NOT NULL,
  `Path` varchar(255) DEFAULT NULL,
  `Size` float DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Download`
--

INSERT INTO `Download` (`MaterialName`, `CourseID`, `Path`, `Size`, `Type`) VALUES
('Background of animal-1', '003', 'assets/docs3/c2.pdf', 12, 'text/plain'),
('Background of human-1', '003', 'assets/docs3/c3.pdf', 12, 'text/plain'),
('Background of zoo-1', '003', 'assets/docs3/c1.pdf', 12, 'text/plain'),
('Background of math-1', '006', 'assets/docs1/c1.pdf', 122, 'text/plain'),
('Difficult as hell-1', '006', 'assets/docs1/c3.pdf', 12, 'text/html'),
('Easy math-1', '006', 'assets/docs1/c2.pdf', 112, 'text/plain'),
('Background of web-1', '009', 'assets/docs/c1.pdf', 356, 'text/plain'),
('HTML-1', '009', 'assets/docs/c2.pdf', 12, 'text/plain'),
('PHP-1', '009', 'assets/docs/c3.pdf', 201.1, 'text/plain'),
('Background of java-1', '010', 'assets/docs4/c1.pdf', 12, 'text/html');

-- --------------------------------------------------------

--
-- Table structure for table `Enrolled`
--

CREATE TABLE `Enrolled` (
  `StudentID` int(11) NOT NULL,
  `CourseID` varchar(255) NOT NULL,
  `CourseCompletionDate` date DEFAULT NULL,
  `CourseCompletionTime` time DEFAULT NULL,
  `Comment` varchar(255) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `PaymentDate` date DEFAULT NULL,
  `PaymentTime` time DEFAULT NULL,
  `PaymentCode` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Enrolled`
--

INSERT INTO `Enrolled` (`StudentID`, `CourseID`, `CourseCompletionDate`, `CourseCompletionTime`, `Comment`, `Rating`, `PaymentDate`, `PaymentTime`, `PaymentCode`) VALUES
(106, '006', '2016-03-10', '09:15:45', 'This is a tough course', 3, '2015-11-11', '09:45:34', '113456'),
(106, '007', '2016-05-10', '09:35:45', 'Professor is not good enough', 2, '2015-02-21', '05:15:34', '123256'),
(107, '004', NULL, NULL, NULL, NULL, '0000-00-00', '05:23:34', '103456'),
(107, '005', '2016-04-12', '07:35:45', 'Easy course', 5, '2015-04-14', '05:03:34', '623456'),
(107, '006', '2017-10-11', '11:25:45', 'Great professor!', 5, '2015-01-14', '05:20:34', '123106'),
(107, '007', '2016-04-10', '07:25:45', 'Tough course', 2, '2015-04-14', '05:23:34', '823456'),
(107, '009', NULL, NULL, NULL, NULL, '2017-12-11', '12:26:22', '445157'),
(112, '001', NULL, NULL, NULL, NULL, '2015-02-14', '07:23:34', '120056'),
(112, '002', '2017-10-10', '11:25:45', 'complex covalent bonds!!', 3, '2014-02-14', '06:23:34', '128856'),
(112, '004', '2017-10-10', '11:25:45', 'plants plants plants', 5, '2015-01-14', '05:23:34', '123401'),
(113, '001', '2018-05-21', '12:45:45', 'Not Good', 1, '2016-05-21', '11:23:34', '123452'),
(113, '002', '2017-12-21', '11:35:45', 'Better take this course', 4, '2016-05-21', '10:13:34', '123456'),
(113, '004', '2018-04-11', '12:45:45', 'Average', 3, '2016-05-21', '09:45:34', '123416'),
(113, '006', '2017-10-11', '11:25:45', 'Awesome professor!', 5, '2015-01-14', '05:20:34', '123356'),
(113, '009', '2017-10-15', '10:25:40', 'Great course', 5, '2015-01-17', '05:20:34', '123926');

-- --------------------------------------------------------

--
-- Table structure for table `Faculty`
--

CREATE TABLE `Faculty` (
  `FacultyID` int(11) NOT NULL,
  `FacultyEmail` varchar(255) DEFAULT NULL,
  `Fname` varchar(255) DEFAULT NULL,
  `Lname` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `ProfilePic` varchar(255) DEFAULT NULL,
  `Street` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  `PostalCode` varchar(5) DEFAULT NULL,
  `Affiliation` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `ValidatedBy` int(11) DEFAULT NULL,
  `ValidatedDate` date DEFAULT NULL,
  `ValidatedTime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Faculty`
--

INSERT INTO `Faculty` (`FacultyID`, `FacultyEmail`, `Fname`, `Lname`, `Password`, `ProfilePic`, `Street`, `City`, `Country`, `PostalCode`, `Affiliation`, `Title`, `Website`, `ValidatedBy`, `ValidatedDate`, `ValidatedTime`) VALUES
(103, 'nikhil.n@husky.neu.edu', 'Nikhil', 'Nikhil', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '858 Huntington Ave', 'Boston', 'USA', '02115', 'Associate Dean', 'Mr', 'nikhilnikhil.com', 101, '2017-12-22', '01:20:13'),
(104, 'deb.sh@husky.neu.edu', 'Shubham', 'Deb', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'CityView', 'Boston', 'USA', '02120', 'Dean', 'Mr', 'shubhamdeb.com', 101, '2017-12-21', '12:30:45'),
(106, 'james.bond@gmail.com', 'James', 'Bond', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No 3 Mission Hill Apartment', 'Boston', 'USA', '02120', 'Associate Professor', 'Mr', 'jamesbond.com', 101, '2017-11-17', '04:23:43'),
(107, 'mary.patrick@gmail.com', 'Mary', 'Patrick', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'Tremont Street', 'Philadelphia', 'USA', '03756', 'Associate Professor', 'Mr', 'marypatrick.com', 101, '2017-12-15', '02:12:33'),
(108, 'ian.smith@gmail.com', 'Ian', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '303 Huntington Ave', 'Boston', 'USA', '02115', 'Associate Professor', 'Mr', 'iansmith.com', 101, '2017-12-29', '03:15:13'),
(109, 'harry.potter@gmail.com', 'Harry', 'Potter', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'New England Street', 'London', 'England', '01421', 'Associate Professor', 'Mr', 'harrypotter.com', 101, '2017-11-25', '03:22:13'),
(110, 'william.doe@gmail.com', 'William', 'Doe', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No 5 Tremont Street', 'Boston', 'USA', '02120', 'Associate Professor', 'Mr', 'williamdoe.com', 101, '2017-12-14', '03:12:13'),
(112, 'john.peterson@gmail.com', 'John', 'Peterson', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '123 Beacon St', 'Boston', 'USA', '02121', 'Professor', 'Mr', 'johnpeterson.com', 101, '2017-11-17', '04:13:43'),
(113, 'jack.daniel@gmail.com', 'Jack', 'Daniel', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '121 Boulevard Avenue', 'New York', 'USA', '01426', ' Associate Professor', 'Mr', 'jackdaniel.com', 101, '2017-12-25', '02:22:13'),
(115, 'will.smith@gmail.com', 'Will', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No1 Weit Street', 'Boston', 'USA', '02120', ' Associate Professor', 'Mr', 'willsmith.com', 101, '2017-12-13', '02:13:13'),
(116, 'robert.garfield@gmail.com', 'Robert', 'Garfield', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '121 Hollywood Blvd', 'Los Angeles', 'USA', '01021', ' Associate Professor', 'Mr', 'robertgarfield.com', 101, '2017-12-24', '01:22:13'),
(120, 'bruno.mars@gmail.com', 'Bruno', 'Mars', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '124 South Avenue', 'Georgia', 'USA', '03421', 'Professor', 'Mr', 'brunomars.com', 101, '2017-12-23', '01:22:13'),
(126, 'faculty_email', 'William', 'Clinger', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '85 Huntington Ave', 'Boston', 'USA', '02114', 'Professor', 'Mr', 'willliamclinger.com', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Interested`
--

CREATE TABLE `Interested` (
  `StudentID` int(11) NOT NULL,
  `CourseID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Interested`
--

INSERT INTO `Interested` (`StudentID`, `CourseID`) VALUES
(109, '006'),
(109, '009'),
(112, '009'),
(112, '010'),
(113, '003'),
(114, '002'),
(114, '004'),
(115, '001'),
(115, '005'),
(120, '008'),
(120, '010'),
(124, '002'),
(124, '003');

-- --------------------------------------------------------

--
-- Table structure for table `LIKES`
--

CREATE TABLE `LIKES` (
  `QuestionID` varchar(255) NOT NULL,
  `CourseID` varchar(255) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  `StudentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `LIKES`
--

INSERT INTO `LIKES` (`QuestionID`, `CourseID`, `Rating`, `StudentID`) VALUES
('1', '001', 2, 112),
('10', '007', 2, 106),
('2', '004', 5, 112),
('3', '005', 5, 107),
('4', '002', 3, 112),
('5', '001', 1, 113),
('6', '002', 4, 113),
('7', '006', 3, 106),
('8', '007', 2, 107),
('9', '004', 5, 112);

-- --------------------------------------------------------

--
-- Table structure for table `Link`
--

CREATE TABLE `Link` (
  `Url` varchar(255) DEFAULT NULL,
  `MaterialName` varchar(255) NOT NULL,
  `CourseID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Link`
--

INSERT INTO `Link` (`Url`, `MaterialName`, `CourseID`) VALUES
('www.youtube.com/background-of-animal-2', 'Background of animal-2', '003'),
('www.youtube.com/background-of-human-2', 'Background of human-2', '003'),
('www.youtube.com/background-of-java-2', 'Background of java-2', '010'),
('www.youtube.com/background-of-web-2', 'Background of math-2', '006'),
('www.youtube.com/background-of-web-2', 'Background of web-2', '009'),
('www.youtube.com/background-of-zoology-2', 'Background of zoo-2', '003'),
('www.youtube.com/difficult-hell-2', 'Difficult as hell-2', '006'),
('www.youtube.com/easy-math-2', 'Easy math-2', '006'),
('www.youtube.com/html-2', 'HTML-2', '009'),
('www.youtube.com/php-2', 'PHP-2', '009');

-- --------------------------------------------------------

--
-- Table structure for table `Post`
--

CREATE TABLE `Post` (
  `MaterialName` varchar(255) NOT NULL,
  `CourseID` varchar(255) NOT NULL,
  `Text` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Post`
--

INSERT INTO `Post` (`MaterialName`, `CourseID`, `Text`) VALUES
('Background of animal-3', '003', 'blablablabla'),
('Background of human-3', '003', 'blablablabla'),
('Background of zoo-3', '003', 'blablablabla'),
('Background of math-3', '006', 'blablablabla'),
('Difficult as hell-3', '006', 'blablablabla'),
('Easy math-3', '006', 'blablablabla'),
('Background of web-3', '009', 'blablablabla'),
('HTML-3', '009', 'blablablabla'),
('PHP-3', '009', 'blablablabla'),
('Background of java-3', '010', 'blablablabla');

-- --------------------------------------------------------

--
-- Table structure for table `Secondary_Topic`
--

CREATE TABLE `Secondary_Topic` (
  `CourseID` varchar(255) NOT NULL,
  `SecondaryTopic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Secondary_Topic`
--

INSERT INTO `Secondary_Topic` (`CourseID`, `SecondaryTopic`) VALUES
('001', 'Electric Current'),
('001', 'Magnetic Field'),
('002', 'Extraction of Gold'),
('002', 'Structure of Benzene'),
('003', 'Animal Cell'),
('003', 'Annelida'),
('004', 'Plant Cell'),
('005', 'Linear Algebra'),
('006', 'Circle'),
('006', 'Properties of Triangle'),
('008', 'Normalization'),
('009', 'CSS3'),
('010', 'Inheritance'),
('010', 'Polymorphism');

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

CREATE TABLE `Student` (
  `StudentID` int(11) NOT NULL,
  `StudentEmail` varchar(255) DEFAULT NULL,
  `Fname` varchar(255) DEFAULT NULL,
  `Lname` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `ProfilePic` varchar(255) DEFAULT NULL,
  `Street` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  `PostalCode` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Student`
--

INSERT INTO `Student` (`StudentID`, `StudentEmail`, `Fname`, `Lname`, `Password`, `ProfilePic`, `Street`, `City`, `Country`, `PostalCode`) VALUES
(101, 'chang.chen2@husky.neu.edu', 'Chang', 'Chen', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '85 Trevalley Rd', 'Revere', 'USA', '02151'),
(102, 'rao.va@husky.neu.edu', 'Varsha', 'Rao', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '1802 Alphonsus St', 'Boston', 'USA', '02120'),
(103, 'nikhil.n@husky.neu.edu', 'Nikhil', 'Nikhil', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '858 Huntington Ave', 'Boston', 'USA', '02115'),
(104, 'deb.sh@husky.neu.edu', 'Shubham', 'Deb', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'CityView', 'Boston', 'USA', '02120'),
(105, 'john.smith@gmail.com', 'John', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No 1711 22 Park Drive', 'Boston', 'USA', '02120'),
(106, 'james.bond@gmail.com', 'James', 'Bond', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No 3 Mission Hill Apartment', 'Boston', 'USA', '02120'),
(107, 'mary.patrick@gmail.com', 'Mary', 'Patrick', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'Tremont Street', 'Philadelphia', 'USA', '03756'),
(108, 'ian.smith@gmail.com', 'Ian', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '303 Huntington Ave', 'Boston', 'USA', '02115'),
(109, 'harry.potter@gmail.com', 'Harry', 'Potter', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'New England Street', 'London', 'England', '01421'),
(110, 'william.doe@gmail.com', 'William', 'Doe', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No 5 Tremont Street', 'Boston', 'USA', '02120'),
(111, 'chris.grey@gmail.com', 'Chris', 'Grey', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No 5 Mission Main Department', 'Boston', 'USA', '02180'),
(112, 'john.peterson@gmail.com', 'John', 'Peterson', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '123 Beacon St', 'Boston', 'USA', '02121'),
(113, 'jack.daniel@gmail.com', 'Jack', 'Daniel', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '121 Boulevard Avenue', 'New York', 'USA', '01426'),
(114, 'taylor.swift@gmail.com', 'Taylor', 'Swift', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '234 Hollywood Blvd', 'Los Angeles', 'USA', '01021'),
(115, 'will.smith@gmail.com', 'Will', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'No1 Weit Street', 'Boston', 'USA', '02120'),
(116, 'robert.garfield@gmail.com', 'Robert', 'Garfield', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '121 Hollywood Blvd', 'Los Angeles', 'USA', '01021'),
(117, 'katy.perry@gmail.com', 'Katy', 'Perry', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'SunnyVale', 'San Francisco', 'USA', '01449'),
(118, 'nicholas.anderson@gmail.com', 'Nicholas', 'Anderson', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '25 SuperStar Street', 'Boston', 'USA', '02120'),
(119, 'helen.smith@gmail.com', 'Helen', 'Smith', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '1211 Hollywood Blvd', 'Los Angeles', 'USA', '01021'),
(120, 'bruno.mars@gmail.com', 'Bruno', 'Mars', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '124 South Avenue', 'Georgia', 'USA', '03421'),
(121, 'emma.stone@gmail.com', 'Emma', 'Stone', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '1011 Hollywood Blvd', 'Los Angeles', 'USA', '01021'),
(122, 'martin.luther@gmail.com', 'Martin', 'Luther', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '1314 Commonwealth Ave', 'Boston', 'USA', '02130'),
(123, 'andrew.garfield@gmail.com', 'Andrew', 'Garfield', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '1012 Hollywood Blvd', 'Los Angeles', 'USA', '01021'),
(124, 'angelina.jolie@gmail.com', 'Angelina', 'Jolie', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '12 Hollywood Blvd', 'Los Angeles', 'USA', '01021'),
(125, 'enrique.iglesias@gmail.com', 'Enrique', 'Iglesias', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', 'whatever street', 'Boston', 'USA', '02130'),
(126, 'faculty_email', 'William', 'Clinger', '$2a$10$n8H2XfS.8RCm/xRPrAZPpeSp4QH30FKK2WkaJHMsFLPg2GQ4HncZy', 'images/profile_pic.png', '85 Huntington Ave', 'Boston', 'USA', '02114');

-- --------------------------------------------------------

--
-- Table structure for table `StudentPhone`
--

CREATE TABLE `StudentPhone` (
  `StudentID` int(11) NOT NULL,
  `Phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `StudentPhone`
--

INSERT INTO `StudentPhone` (`StudentID`, `Phone`) VALUES
(101, '8571237851'),
(103, '8577011232'),
(103, '8577012452'),
(104, '8577012451'),
(104, '8577016742'),
(105, '8571237444'),
(106, '8577012457'),
(106, '8577912217'),
(107, '7268934562'),
(107, '8577012455'),
(107, '8577912215'),
(108, '8571237021'),
(109, '8571232222'),
(109, '8577012456'),
(109, '8577912216'),
(111, '8571231111'),
(112, '8578004821'),
(114, '8571237777'),
(115, '7268034892'),
(115, '7668934812'),
(115, '9268037892'),
(116, '7268034889'),
(116, '8268034879'),
(116, '8568934891'),
(116, '8571236666'),
(118, '8571235555'),
(119, '8571233333'),
(120, '8578004829'),
(120, '8578004831'),
(120, '8578004849');

-- --------------------------------------------------------

--
-- Table structure for table `Url_Type`
--

CREATE TABLE `Url_Type` (
  `Url` varchar(255) NOT NULL,
  `Tag` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Url_Type`
--

INSERT INTO `Url_Type` (`Url`, `Tag`) VALUES
('www.youtube.com/background-of-animal-2', 'audio'),
('www.youtube.com/background-of-human-2', 'audio'),
('www.youtube.com/background-of-java-2', 'audio'),
('www.youtube.com/background-of-math-2', 'video'),
('www.youtube.com/background-of-web-2', 'video'),
('www.youtube.com/background-of-zoology-2', 'audio'),
('www.youtube.com/difficult-hell-2', 'audio'),
('www.youtube.com/easy-math-2', 'video'),
('www.youtube.com/html-2', 'video'),
('www.youtube.com/php-2', 'video');

-- --------------------------------------------------------

--
-- Table structure for table `VisibleTo`
--

CREATE TABLE `VisibleTo` (
  `QuestionID` varchar(255) NOT NULL,
  `CourseID` varchar(255) NOT NULL,
  `FacultyID` int(11) NOT NULL,
  `MakeVisible` tinyint(1) DEFAULT NULL,
  `Answer` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `VisibleTo`
--

INSERT INTO `VisibleTo` (`QuestionID`, `CourseID`, `FacultyID`, `MakeVisible`, `Answer`) VALUES
('1', '009', 109, 1, 'Because you need to graduate'),
('10', '006', 109, 1, 'No.'),
('2', '010', 107, 1, 'You’ll learn how to code in Java programming language'),
('3', '003', 107, 0, 'I do not hate anyone.'),
('4', '005', 108, 1, 'It is due on next Monday.'),
('5', '006', 109, 1, 'Everything'),
('6', '006', 109, 1, 'Next Monday!'),
('7', '006', 109, 1, 'Yes.'),
('8', '006', 109, 1, 'It was due last week.'),
('9', '006', 109, 1, 'It is due next Wednesday.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`AdminID`),
  ADD KEY `PermittedBy` (`PermittedBy`);

--
-- Indexes for table `Belongs_To`
--
ALTER TABLE `Belongs_To`
  ADD PRIMARY KEY (`CourseID`,`QuestionID`,`MaterialName`),
  ADD KEY `QuestionID` (`QuestionID`),
  ADD KEY `MaterialName` (`MaterialName`);

--
-- Indexes for table `Completes_Material`
--
ALTER TABLE `Completes_Material`
  ADD PRIMARY KEY (`CourseID`,`StudentID`,`MaterialName`),
  ADD KEY `StudentID` (`StudentID`),
  ADD KEY `MaterialName` (`MaterialName`);

--
-- Indexes for table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`CourseID`);

--
-- Indexes for table `Course_Material`
--
ALTER TABLE `Course_Material`
  ADD PRIMARY KEY (`MaterialName`,`CourseID`,`CourseOrder`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Indexes for table `Course_Question`
--
ALTER TABLE `Course_Question`
  ADD PRIMARY KEY (`QuestionID`,`CourseID`);

--
-- Indexes for table `Creates`
--
ALTER TABLE `Creates`
  ADD PRIMARY KEY (`FacultyID`,`CourseID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Indexes for table `Download`
--
ALTER TABLE `Download`
  ADD PRIMARY KEY (`CourseID`,`MaterialName`),
  ADD KEY `MaterialName` (`MaterialName`);

--
-- Indexes for table `Enrolled`
--
ALTER TABLE `Enrolled`
  ADD PRIMARY KEY (`StudentID`,`CourseID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Indexes for table `Faculty`
--
ALTER TABLE `Faculty`
  ADD PRIMARY KEY (`FacultyID`);

--
-- Indexes for table `Interested`
--
ALTER TABLE `Interested`
  ADD PRIMARY KEY (`StudentID`,`CourseID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Indexes for table `LIKES`
--
ALTER TABLE `LIKES`
  ADD PRIMARY KEY (`QuestionID`,`CourseID`,`StudentID`),
  ADD KEY `CourseID` (`CourseID`),
  ADD KEY `StudentID` (`StudentID`);

--
-- Indexes for table `Link`
--
ALTER TABLE `Link`
  ADD PRIMARY KEY (`MaterialName`,`CourseID`),
  ADD KEY `CourseID` (`CourseID`),
  ADD KEY `Url` (`Url`);

--
-- Indexes for table `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`CourseID`,`MaterialName`),
  ADD KEY `MaterialName` (`MaterialName`);

--
-- Indexes for table `Secondary_Topic`
--
ALTER TABLE `Secondary_Topic`
  ADD PRIMARY KEY (`CourseID`,`SecondaryTopic`);

--
-- Indexes for table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`StudentID`);

--
-- Indexes for table `StudentPhone`
--
ALTER TABLE `StudentPhone`
  ADD PRIMARY KEY (`StudentID`,`Phone`);

--
-- Indexes for table `Url_Type`
--
ALTER TABLE `Url_Type`
  ADD PRIMARY KEY (`Url`);

--
-- Indexes for table `VisibleTo`
--
ALTER TABLE `VisibleTo`
  ADD PRIMARY KEY (`QuestionID`,`CourseID`,`FacultyID`),
  ADD KEY `CourseID` (`CourseID`),
  ADD KEY `FacultyID` (`FacultyID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Student`
--
ALTER TABLE `Student`
  MODIFY `StudentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Admin`
--
ALTER TABLE `Admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`AdminID`) REFERENCES `Student` (`StudentID`),
  ADD CONSTRAINT `admin_ibfk_2` FOREIGN KEY (`PermittedBy`) REFERENCES `Admin` (`AdminID`);

--
-- Constraints for table `Belongs_To`
--
ALTER TABLE `Belongs_To`
  ADD CONSTRAINT `belongs_to_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`),
  ADD CONSTRAINT `belongs_to_ibfk_2` FOREIGN KEY (`QuestionID`) REFERENCES `Course_Question` (`QuestionID`),
  ADD CONSTRAINT `belongs_to_ibfk_3` FOREIGN KEY (`MaterialName`) REFERENCES `Course_Material` (`MaterialName`);

--
-- Constraints for table `Completes_Material`
--
ALTER TABLE `Completes_Material`
  ADD CONSTRAINT `completes_material_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `Student` (`StudentID`),
  ADD CONSTRAINT `completes_material_ibfk_2` FOREIGN KEY (`MaterialName`) REFERENCES `Course_Material` (`MaterialName`);

--
-- Constraints for table `Course_Material`
--
ALTER TABLE `Course_Material`
  ADD CONSTRAINT `course_material_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`);

--
-- Constraints for table `Creates`
--
ALTER TABLE `Creates`
  ADD CONSTRAINT `creates_ibfk_1` FOREIGN KEY (`FacultyID`) REFERENCES `Faculty` (`FacultyID`),
  ADD CONSTRAINT `creates_ibfk_2` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`);

--
-- Constraints for table `Download`
--
ALTER TABLE `Download`
  ADD CONSTRAINT `download_ibfk_1` FOREIGN KEY (`MaterialName`) REFERENCES `Course_Material` (`MaterialName`),
  ADD CONSTRAINT `download_ibfk_2` FOREIGN KEY (`CourseID`) REFERENCES `Course_Material` (`CourseID`);

--
-- Constraints for table `Enrolled`
--
ALTER TABLE `Enrolled`
  ADD CONSTRAINT `enrolled_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`),
  ADD CONSTRAINT `enrolled_ibfk_2` FOREIGN KEY (`StudentID`) REFERENCES `Student` (`StudentID`);

--
-- Constraints for table `Faculty`
--
ALTER TABLE `Faculty`
  ADD CONSTRAINT `faculty_ibfk_1` FOREIGN KEY (`FacultyID`) REFERENCES `Student` (`StudentID`);

--
-- Constraints for table `Interested`
--
ALTER TABLE `Interested`
  ADD CONSTRAINT `interested_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `Student` (`StudentID`),
  ADD CONSTRAINT `interested_ibfk_2` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`);

--
-- Constraints for table `LIKES`
--
ALTER TABLE `LIKES`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`QuestionID`) REFERENCES `Course_Question` (`QuestionID`),
  ADD CONSTRAINT `likes_ibfk_3` FOREIGN KEY (`StudentID`) REFERENCES `Student` (`StudentID`);

--
-- Constraints for table `Link`
--
ALTER TABLE `Link`
  ADD CONSTRAINT `link_ibfk_1` FOREIGN KEY (`MaterialName`) REFERENCES `Course_Material` (`MaterialName`),
  ADD CONSTRAINT `link_ibfk_2` FOREIGN KEY (`CourseID`) REFERENCES `Course_Material` (`CourseID`),
  ADD CONSTRAINT `link_ibfk_3` FOREIGN KEY (`Url`) REFERENCES `Url_Type` (`Url`);

--
-- Constraints for table `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`MaterialName`) REFERENCES `Course_Material` (`MaterialName`),
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`CourseID`) REFERENCES `Course_Material` (`CourseID`);

--
-- Constraints for table `Secondary_Topic`
--
ALTER TABLE `Secondary_Topic`
  ADD CONSTRAINT `secondary_topic_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`);

--
-- Constraints for table `StudentPhone`
--
ALTER TABLE `StudentPhone`
  ADD CONSTRAINT `studentphone_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `Student` (`StudentID`);

--
-- Constraints for table `VisibleTo`
--
ALTER TABLE `VisibleTo`
  ADD CONSTRAINT `visibleto_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`),
  ADD CONSTRAINT `visibleto_ibfk_2` FOREIGN KEY (`QuestionID`) REFERENCES `Course_Question` (`QuestionID`),
  ADD CONSTRAINT `visibleto_ibfk_3` FOREIGN KEY (`FacultyID`) REFERENCES `Faculty` (`FacultyID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
