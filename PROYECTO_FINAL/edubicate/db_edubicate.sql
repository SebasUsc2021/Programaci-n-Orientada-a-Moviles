-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2022 at 04:33 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_edubicate`
--

-- --------------------------------------------------------

--
-- Table structure for table `t001_usuarios`
--

CREATE TABLE `t001_usuarios` (
  `c001_id` int(11) NOT NULL,
  `c001_cedula` varchar(64) NOT NULL,
  `c001_contrasena` varchar(64) NOT NULL,
  `c001_nombre` varchar(120) NOT NULL,
  `c001_email` varchar(120) NOT NULL,
  `c001_foto` varchar(255) DEFAULT NULL,
  `c001_fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  `c001_fecha_actualizacion` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t001_usuarios`
--

INSERT INTO `t001_usuarios` (`c001_id`, `c001_cedula`, `c001_contrasena`, `c001_nombre`, `c001_email`, `c001_foto`, `c001_fecha_creacion`, `c001_fecha_actualizacion`) VALUES
(1, '1005868161', '1234', 'Santiago Varela', 'sirzes02@gmail.com', '/prueba', '2022-11-02 04:55:07', '2022-11-10 03:15:12'),
(3, '11111', '1234', 'Santiago Varela', '1111@gmail.com', '/prueba', '2022-11-02 04:55:39', '2022-11-02 05:07:26');

-- --------------------------------------------------------

--
-- Table structure for table `t002_cursos`
--

CREATE TABLE `t002_cursos` (
  `c002_id` int(11) NOT NULL,
  `c002_imagen` varchar(255) DEFAULT NULL,
  `c002_nombre` varchar(120) NOT NULL,
  `c002_descripcion` text DEFAULT 'Sin descripción',
  `c002_codigo` varchar(64) NOT NULL,
  `c002_salon` varchar(64) NOT NULL,
  `c002_horario` varchar(255) NOT NULL,
  `c003_id_docente` int(11) NOT NULL,
  `c003_fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  `c003_fecha_actualizacion` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t002_cursos`
--

INSERT INTO `t002_cursos` (`c002_id`, `c002_imagen`, `c002_nombre`, `c002_descripcion`, `c002_codigo`, `c002_salon`, `c002_horario`, `c003_id_docente`, `c003_fecha_creacion`, `c003_fecha_actualizacion`) VALUES
(1, NULL, 'APO II', 'Sin descripción', 'SDHJS667', '5624', 'Jueves a las 12:00PM', 1, '2022-11-10 02:48:10', '2022-11-10 02:48:10'),
(2, NULL, 'APO I', 'Sin descripción', 'ASJKA78', '1302', '13:00 viernes', 1, '2022-11-10 03:07:18', '2022-11-10 03:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `t003_docentes`
--

CREATE TABLE `t003_docentes` (
  `c003_id` int(11) NOT NULL,
  `c003_imagen` varchar(255) DEFAULT NULL,
  `c003_nombre` varchar(120) NOT NULL,
  `c003_correo` varchar(120) NOT NULL,
  `c003_fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  `c003_fecha_actualizacion` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t003_docentes`
--

INSERT INTO `t003_docentes` (`c003_id`, `c003_imagen`, `c003_nombre`, `c003_correo`, `c003_fecha_creacion`, `c003_fecha_actualizacion`) VALUES
(1, NULL, 'Juan pablo', 'juan.pablo00@usc.edu.co', '2022-11-10 02:47:23', '2022-11-10 02:47:23');

-- --------------------------------------------------------

--
-- Table structure for table `t004_usuario_curso`
--

CREATE TABLE `t004_usuario_curso` (
  `c004_id` int(11) NOT NULL,
  `c001_id_usuario` int(11) NOT NULL,
  `c002_id_curso` int(11) NOT NULL,
  `c004_fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  `c004_fecha_actualizacion` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t004_usuario_curso`
--

INSERT INTO `t004_usuario_curso` (`c004_id`, `c001_id_usuario`, `c002_id_curso`, `c004_fecha_creacion`, `c004_fecha_actualizacion`) VALUES
(1, 1, 1, '2022-11-10 02:48:40', '2022-11-10 02:48:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t001_usuarios`
--
ALTER TABLE `t001_usuarios`
  ADD PRIMARY KEY (`c001_id`),
  ADD UNIQUE KEY `ids` (`c001_cedula`,`c001_email`);

--
-- Indexes for table `t002_cursos`
--
ALTER TABLE `t002_cursos`
  ADD PRIMARY KEY (`c002_id`),
  ADD UNIQUE KEY `ids` (`c002_codigo`),
  ADD KEY `c003_id_docente` (`c003_id_docente`);

--
-- Indexes for table `t003_docentes`
--
ALTER TABLE `t003_docentes`
  ADD PRIMARY KEY (`c003_id`),
  ADD UNIQUE KEY `ids` (`c003_correo`);

--
-- Indexes for table `t004_usuario_curso`
--
ALTER TABLE `t004_usuario_curso`
  ADD PRIMARY KEY (`c004_id`),
  ADD KEY `c001_id_usuario` (`c001_id_usuario`),
  ADD KEY `c002_id_curso` (`c002_id_curso`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t001_usuarios`
--
ALTER TABLE `t001_usuarios`
  MODIFY `c001_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `t002_cursos`
--
ALTER TABLE `t002_cursos`
  MODIFY `c002_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `t003_docentes`
--
ALTER TABLE `t003_docentes`
  MODIFY `c003_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `t004_usuario_curso`
--
ALTER TABLE `t004_usuario_curso`
  MODIFY `c004_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `t002_cursos`
--
ALTER TABLE `t002_cursos`
  ADD CONSTRAINT `t002_cursos_ibfk_1` FOREIGN KEY (`c003_id_docente`) REFERENCES `t003_docentes` (`c003_id`);

--
-- Constraints for table `t004_usuario_curso`
--
ALTER TABLE `t004_usuario_curso`
  ADD CONSTRAINT `t004_usuario_curso_ibfk_1` FOREIGN KEY (`c001_id_usuario`) REFERENCES `t001_usuarios` (`c001_id`),
  ADD CONSTRAINT `t004_usuario_curso_ibfk_2` FOREIGN KEY (`c002_id_curso`) REFERENCES `t002_cursos` (`c002_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
