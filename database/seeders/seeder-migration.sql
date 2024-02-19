-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Listage de la structure de table e-learning. oauth_access_tokens
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table e-learning.oauth_access_tokens : ~404 rows (environ)
DELETE FROM `oauth_access_tokens`;
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
	('023d4e3857020d6f99cd57e56854ae9784fd68033f6abbcb1b3d2d863b6826beb2acbcb323d60d0d', 11, '9b1b6d11-b65e-4c8f-ac7c-b82e32819f4d', NULL, '[]', 1, '2024-01-23 21:34:10', '2024-01-23 21:40:20', '2024-01-23 22:39:10');

-- Listage de la structure de table e-learning. oauth_auth_codes
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table e-learning.oauth_auth_codes : ~0 rows (environ)
DELETE FROM `oauth_auth_codes`;

-- Listage de la structure de table e-learning. oauth_clients
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table e-learning.oauth_clients : ~2 rows (environ)
DELETE FROM `oauth_clients`;
INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
	('9b1b6d11-58b9-41fb-8108-94e67552710f', NULL, 'elearning Personal Access Client', 'g5JKQyg1ZCyGG0wS5i6cq0K4msZwESKt9yk6J3tO', NULL, 'https://e-learning.ma', 1, 0, 0, '2024-01-16 15:02:42', '2024-01-16 15:02:42'),
	('9b1b6d11-b65e-4c8f-ac7c-b82e32819f4d', NULL, 'elearning Password Grant Client', 'BSKQFSH00ayxAUn7KKofS8HXoQpJNBZlQFKN0qse', 'users', 'https://e-learning.ma', 0, 1, 0, '2024-01-16 15:02:42', '2024-01-16 15:02:42');

-- Listage de la structure de table e-learning. oauth_personal_access_clients
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table e-learning.oauth_personal_access_clients : ~1 rows (environ)
DELETE FROM `oauth_personal_access_clients`;
INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
	(1, '9b1b6d11-58b9-41fb-8108-94e67552710f', '2024-01-16 15:02:42', '2024-01-16 15:02:42');

-- Listage de la structure de table e-learning. oauth_refresh_tokens
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table e-learning.oauth_refresh_tokens : ~405 rows (environ)
DELETE FROM `oauth_refresh_tokens`;
INSERT INTO `oauth_refresh_tokens` (`id`, `access_token_id`, `revoked`, `expires_at`) VALUES
	('0024047eda88d174f9334faa7e601b01230adf58ad621c9d284801ea7f1a6647de0cd058839aee6d', 'a313f52db50bf9d7c249ab1ad64f4c0034fcc77f1a22fd7bc79e1e45aee36d5d8b00d31b667b83dd', 0, '2024-02-18 21:16:15');

-- Listage de la structure de table e-learning. permissions
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table e-learning.permissions : ~16 rows (environ)
DELETE FROM `permissions`;
INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
	(1, 'read_User', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(2, 'create_User', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(3, 'update_User', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(4, 'delete_User', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(5, 'read_Role', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(6, 'create_Role', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(7, 'update_Role', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(8, 'delete_Role', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(9, 'read_Course', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(10, 'create_Course', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(11, 'update_Course', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(12, 'delete_Course', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(13, 'read_Storage', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(14, 'create_Storage', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(15, 'update_Storage', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00'),
	(16, 'delete_Storage', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00');

-- Listage de la structure de table e-learning. roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` enum('role','plan') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'role',
  `data` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table e-learning.roles : ~4 rows (environ)
DELETE FROM `roles`;
INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`, `type`, `data`) VALUES
	(1, 'super_admin', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00', 'role', NULL),
	(2, 'instructor', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00', 'role', NULL),
	(3, 'student', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00', 'role', NULL),
	(4, 'admin', 'api', '2024-02-19 12:22:00', '2024-02-19 12:22:00', 'role', NULL);

-- Listage de la structure de table e-learning. role_has_permissions
CREATE TABLE IF NOT EXISTS `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table e-learning.role_has_permissions : ~16 rows (environ)
DELETE FROM `role_has_permissions`;
INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
	(1, 1),
	(2, 1),
	(3, 1),
	(4, 1),
	(5, 1),
	(6, 1),
	(7, 1),
	(8, 1),
	(9, 1),
	(10, 1),
	(11, 1),
	(12, 1),
	(13, 1),
	(14, 1),
	(15, 1),
	(16, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
