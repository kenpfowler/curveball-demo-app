SET NAMES utf8mb4;
START TRANSACTION;

INSERT INTO changelog VALUES (33, UNIX_TIMESTAMP());

ALTER TABLE user_privileges
  CHANGE COLUMN scope privilege VARCHAR(50) NOT NULL;

COMMIT;