SET NAMES utf8mb4;
START TRANSACTION;

INSERT INTO changelog VALUES (4, UNIX_TIMESTAMP());

ALTER TABLE oauth2_token
  CHANGE client_id oauth2_client_id VARCHAR(50) NOT NULL;


COMMIT;
