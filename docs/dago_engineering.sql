-- dago_engineering.`user` definition

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- dago_engineering.login definition

CREATE TABLE `login` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`username`),
  KEY `login_FK` (`user_id`),
  CONSTRAINT `login_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO dago_engineering.`user` (name,email,phone,address) VALUES
	 ('Doni Salmanan','ds@gmail.com','083485739845','bandung'),
	 ('Indra Kenz','ik@gmail.com','083485739846','medan');

INSERT INTO dago_engineering.login (username,password,user_id) VALUES
	 ('donsal','$2b$10$yfjMQd2mMOtT09oNamqeFeHbGsvx6g5DSpH3evcVPXz1jExNlSD0y',1),
	 ('inken','$2b$10$XmdSZsxAnC3wmjlf9SXw4u4J.vUvjX/BHVmXupPFEz8th3K.B9LTS',2);
