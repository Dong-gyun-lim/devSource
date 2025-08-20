use kbdb;
show databases;
show tables;
-- DDL 문장 (Data Definition Language) : create, drop, alter, truncate
-- DML 문장 (Data Manipulation Language) : insert, delete, update, select
-- DQL 문장 (Data Query Language) : select문
-- TCL 문장 (Transaction Control Language) : commit, rollback
-- DCL 문장 (Data Control Language) :grant to , revoke
-- 회원 테이블 생성문
-- drop table if exists members; --테이블 삭제

create table if not exists members(
   id int primary key auto_increment, -- 회원번호 (PK)
    name varchar(30) not null, -- 회원명
    email varchar(50) not null unique, -- 이메일 (로그인시 id로 사용)
    passwd varchar(100) not null, -- 비밀번호 (암호화된 비번)
    role varchar(30) not null default 'USER', -- 역할 ( USER 또는 ADMIN)
    createdAt date default (current_date()), -- 가입일
    refreshtoken varchar(512) default null -- 회원 인증시 사용
);

desc members;
-- devSource\SQL\members.sql
-- 새로운 데이터 삽입 : insert 문
-- insert into 테이블명 (컬럼명1, 컬럼명2, ...) 
-- values ('값1', '값2',...)

insert into members (name, email,passwd)
values ('홍길동','hong@naver.com','111');
commit;

-- 데이터 조회
-- select 컬럼명1, 컬럼명2,... from 테이블명;
select id,name,email,passwd,role,createdat,refreshtoken from members;

select * from members where id=1;

-- 김관리  admin@master.com  111 ADMIN 회원정보를 삽입하세요
insert into members (name,passwd,email,role)
values('김관리','111','admin@master.com','ADMIN');
-- 조회하기
SELECT * FROM MEMBERS;

use kbdb;

select * from members order by id desc;

select * from members order by id desc;

-- %Y : 년도 4자리
-- %y : 년도 2자리
-- %m : 월 2자리
-- %d : 일 2자리
-- %H : 시간 (24시간 기준)
-- %i : 분
-- %s : 초

select id, name, email, role, date_format(createdAt, '%Y-%m-%d %H:%i:%s')
from members order by id desc;

select id, name, email, role,
       date_format(createdAt, '%Y-%m-%d') createdAt
from members
where id = 3;

-- 로그인
-- email, passwd 일치 여부
-- hong@naver.com   123
select * from members
where email = 'hong@naver.com';

-- and, or 연산자
select * from members
where email = 'hong@naver.com' and passwd = '123';

