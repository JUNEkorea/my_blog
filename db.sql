#DB 생성
DROP DATABASE IF EXISTS site14;
USE site14;

#게시물 테이블 생성
DROP TABLE IF EXISTS article;
CREATE TABLE article (
    id INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    regDate DATETIME NOT NULL,
    updateDate DATETIME NOT NULL,
    displayStatus TINYINT(1) UNSIGNED NOT NULL,
    cateItemId INT(10) UNSIGNED NOT NULL,
    title CHAR(250)  CHARSET utf8mb4 NULL,
    `body` LONGTEXT CHARSET utf8mb4 NOT NULL ;
    );
 #카테고리 아이템  테이블 생성   
DROP TABLE IF EXISTS cateItem;
CREATE TABLE cateItem(
    id INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    regDate DATETIME NOT NULL,
    `name` CHAR(100) NOT NULL UNIQUE
);
#카테고리 아이템추가
INSERT INTO cateItem SET regDate = NOW(), `name` ='일상 ';
INSERT INTO cateItem SET regDate = NOW(), `name` ='일상 ';
INSERT INTO cateItem SET regDate = NOW(), `name` ='일상 ';
INSERT INTO cateItem SET regDate = NOW(), `name` ='일상 ';