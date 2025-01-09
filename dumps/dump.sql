--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
-- SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Admin" (
    "adminId" integer NOT NULL,
    login text NOT NULL,
    password text NOT NULL,
    email text NOT NULL
);


ALTER TABLE public."Admin" OWNER TO postgres;

--
-- Name: Admin_adminId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Admin_adminId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Admin_adminId_seq" OWNER TO postgres;

--
-- Name: Admin_adminId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Admin_adminId_seq" OWNED BY public."Admin"."adminId";


--
-- Name: AppUser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."AppUser" (
    "userId" integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    login text NOT NULL
);


ALTER TABLE public."AppUser" OWNER TO postgres;

--
-- Name: AppUser_userId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."AppUser_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."AppUser_userId_seq" OWNER TO postgres;

--
-- Name: AppUser_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."AppUser_userId_seq" OWNED BY public."AppUser"."userId";


--
-- Name: Logo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Logo" (
    "logoId" integer NOT NULL,
    "logoPath" text NOT NULL
);


ALTER TABLE public."Logo" OWNER TO postgres;

--
-- Name: Logo_logoId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Logo_logoId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Logo_logoId_seq" OWNER TO postgres;

--
-- Name: Logo_logoId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Logo_logoId_seq" OWNED BY public."Logo"."logoId";


--
-- Name: Request; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Request" (
    "requestId" integer NOT NULL,
    "organizationName" text NOT NULL,
    "contactPerson" text NOT NULL,
    "phoneNumber" text NOT NULL,
    email text NOT NULL,
    deadline text NOT NULL,
    "firstCategory" text NOT NULL,
    "secondCategory" text NOT NULL,
    description text NOT NULL,
    "filePath" text NOT NULL
);


ALTER TABLE public."Request" OWNER TO postgres;

--
-- Name: Request_requestId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Request_requestId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Request_requestId_seq" OWNER TO postgres;

--
-- Name: Request_requestId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Request_requestId_seq" OWNED BY public."Request"."requestId";


--
-- Name: Stack; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Stack" (
    "stackId" integer NOT NULL,
    "areaName" text NOT NULL,
    stack text NOT NULL
);


ALTER TABLE public."Stack" OWNER TO postgres;

--
-- Name: Stack_stackId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Stack_stackId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Stack_stackId_seq" OWNER TO postgres;

--
-- Name: Stack_stackId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Stack_stackId_seq" OWNED BY public."Stack"."stackId";


--
-- Name: Student; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Student" (
    "fullName" text NOT NULL,
    description text NOT NULL,
    "projectPhotoPath" text NOT NULL,
    "studentPhotoPath" text NOT NULL,
    "studentId" integer NOT NULL
);


ALTER TABLE public."Student" OWNER TO postgres;

--
-- Name: Student_studentId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Student_studentId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Student_studentId_seq" OWNER TO postgres;

--
-- Name: Student_studentId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Student_studentId_seq" OWNED BY public."Student"."studentId";


--
-- Name: Teacher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Teacher" (
    "teacherId" integer NOT NULL,
    "photoPath" text NOT NULL,
    "fullName" text NOT NULL,
    description text NOT NULL
);


ALTER TABLE public."Teacher" OWNER TO postgres;

--
-- Name: Teacher_teacherId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Teacher_teacherId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Teacher_teacherId_seq" OWNER TO postgres;

--
-- Name: Teacher_teacherId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Teacher_teacherId_seq" OWNED BY public."Teacher"."teacherId";


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Admin adminId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admin" ALTER COLUMN "adminId" SET DEFAULT nextval('public."Admin_adminId_seq"'::regclass);


--
-- Name: AppUser userId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AppUser" ALTER COLUMN "userId" SET DEFAULT nextval('public."AppUser_userId_seq"'::regclass);


--
-- Name: Logo logoId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Logo" ALTER COLUMN "logoId" SET DEFAULT nextval('public."Logo_logoId_seq"'::regclass);


--
-- Name: Request requestId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Request" ALTER COLUMN "requestId" SET DEFAULT nextval('public."Request_requestId_seq"'::regclass);


--
-- Name: Stack stackId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Stack" ALTER COLUMN "stackId" SET DEFAULT nextval('public."Stack_stackId_seq"'::regclass);


--
-- Name: Student studentId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Student" ALTER COLUMN "studentId" SET DEFAULT nextval('public."Student_studentId_seq"'::regclass);


--
-- Name: Teacher teacherId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Teacher" ALTER COLUMN "teacherId" SET DEFAULT nextval('public."Teacher_teacherId_seq"'::regclass);


--
-- Data for Name: Admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Admin" ("adminId", login, password, email) FROM stdin;
\.


--
-- Data for Name: AppUser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AppUser" ("userId", email, password, login) FROM stdin;
\.


--
-- Data for Name: Logo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Logo" ("logoId", "logoPath") FROM stdin;
1	logo/logo-1736441072202-307164358.jpg
2	logo/logo-1736441124141-557023845.jpg
3	logo/logo-1736443858916-504658782.jpg
\.


--
-- Data for Name: Request; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Request" ("requestId", "organizationName", "contactPerson", "phoneNumber", email, deadline, "firstCategory", "secondCategory", description, "filePath") FROM stdin;
1	ООО "Стройландия"	Андропов Валерий Тимофеевич	+78560371844	stroy-manager@yandex.ru	1 месяц	IT	Мобильное приложение	Необходимо мобильное приложение для магазина Стройландия. ТЗ прилагается в файле	uploads\\files\\1736441412104-492149680.xlsx
\.


--
-- Data for Name: Stack; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Stack" ("stackId", "areaName", stack) FROM stdin;
1	Разработка веб-сайта	HTML;CSS;JavaScript;React
2	Графический дизайн	Photoshop;Illustrator
3	Фото/Видео съёмка	Canon;Adobe Premiere
\.


--
-- Data for Name: Student; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Student" ("fullName", description, "projectPhotoPath", "studentPhotoPath", "studentId") FROM stdin;
Никита Безгин	Не только талантливый иллюстратор, но и невероятно эффективный работник. Он выполняет задачи быстро и качественно, всегда укладываясь в сроки. Его профессионализм и ответственность делают его ценным активом для любого проекта	projectPhoto/projectPhoto-1736438552761-135518564.png	personPhoto/personPhoto-1736438552767-722295565.jpg	2
Никита Безгин	Не только талантливый фронтенд-разработчик, но и невероятно эффективный работник.  Его глубокие знания в области веб-технологий и внимание к деталям делают его ценным активом для любого проекта. Профессионализм и ответственность позволяют ему успешно справляться с любыми вызовами.	projectPhoto/projectPhoto-1736438935863-593231088.png	personPhoto/personPhoto-1736438935868-350456770.jpg	3
\.


--
-- Data for Name: Teacher; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Teacher" ("teacherId", "photoPath", "fullName", description) FROM stdin;
1	teacherImgs/teacher-1736447843879-867396970.jpg	Скомрохов Егор Константинович	frontend 
2	teacherImgs/teacher-1736447896420-346531032.jpg	Садиков Виталий Дмитриевич	backend
3	teacherImgs/teacher-1736447933213-727634458.jpg	Шкуратова Мария Николаевна	designer
4	teacherImgs/teacher-1736448028979-833311703.jpg	Кузнецов Иван Юрьевич	mobile
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
5112069c-f45a-43e3-9ddf-5a41a7770413	0bd4dd2ac99dd666f4557da1495fd4f268016cabf6c825ad8338161155bd0142	2025-01-09 20:21:55.126916+05	20241224054358_init	\N	\N	2025-01-09 20:21:55.119006+05	1
c64de051-4e10-443c-9a80-024e91fa4752	65b12fa64e0510f7eb77f91c54e501f91d7d28583829b69ddc9e714e8590dcb2	2025-01-09 20:21:55.132397+05	20241224081828_create_user_model	\N	\N	2025-01-09 20:21:55.127244+05	1
8f5eaeb9-2c08-4e0e-9da2-6c8b906c4ace	db6877ead825796b1f7c810e7b4f112ee15e4a746a9928d0ca66b276bce5e05e	2025-01-09 20:21:55.138472+05	20241225164346_update_user	\N	\N	2025-01-09 20:21:55.132706+05	1
019ea313-19a0-437f-8956-a7a48f5304e4	76dcd8609309af740831bb2d8961d2b49a75e3845178dc353105ce0f66e6da68	2025-01-09 20:21:55.14181+05	20241226083713_add_cards	\N	\N	2025-01-09 20:21:55.138826+05	1
4fa4ee0c-d7bf-4829-b002-e0cd06dbdd43	ca6783303fef021672ba43d6b443aae5c71695aa176ae6a48103c73e47cd78aa	2025-01-09 20:21:55.146344+05	20250105163112_add_admin	\N	\N	2025-01-09 20:21:55.142087+05	1
bb7f878e-9cc6-42be-8c94-3b65df205e34	7f5625d4e52e2026dd1c2ccc6bd56ccc90634993941c68c4852de3a502aadebf	2025-01-09 20:21:55.148448+05	20250105163418_edit_admin	\N	\N	2025-01-09 20:21:55.146651+05	1
7d037cab-3c11-4aa9-be93-6e278b9b0078	dc47e7d19074957e0fa78189bfcfa4223f1e64e65acecba4b5434cf79df73247	2025-01-09 20:21:55.152761+05	20250107071407_add_teacher	\N	\N	2025-01-09 20:21:55.148832+05	1
c2a0bb89-0d3d-4da2-bdd3-22b88e7cab22	679f87a3a0032a5f4f77b6826a46633e0c9799c119a26177e42a45a879bddf58	2025-01-09 20:21:55.156018+05	20250108100640_add_student	\N	\N	2025-01-09 20:21:55.153073+05	1
405200b5-3364-4081-9000-fe920534510e	a68138a46cb82d3b1c2f875afe6e93d283a6154ec57136026ae8803144499e3b	2025-01-09 20:21:55.79932+05	20250109152155_fix_student	\N	\N	2025-01-09 20:21:55.79288+05	1
da665f50-94ef-4379-bc38-a1ba2739858b	5012f5a75206d8930a1457d394afd0892360a1f75cd9fd561c55e433b5e13921	2025-01-09 21:16:16.745235+05	20250109161616_add_logo	\N	\N	2025-01-09 21:16:16.73882+05	1
9adedc8e-e633-43e5-84d1-85c8ec0531e4	f33b94bb8f9bd5419c8601f0e7c90eff958559937372e2389b26bd72b75f9635	2025-01-09 22:49:10.636207+05	20250109174910_add_stack	\N	\N	2025-01-09 22:49:10.629838+05	1
a3c078ca-8580-42ae-aada-a6c76ce2f5b5	851853fa6823396efcb9027abcfd1c97cd2a2d026a6975180a46be1f7233333c	2025-01-09 23:09:53.534438+05	20250109180953_new_stack	\N	\N	2025-01-09 23:09:53.526338+05	1
\.


--
-- Name: Admin_adminId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Admin_adminId_seq"', 1, false);


--
-- Name: AppUser_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."AppUser_userId_seq"', 1, false);


--
-- Name: Logo_logoId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Logo_logoId_seq"', 3, true);


--
-- Name: Request_requestId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Request_requestId_seq"', 1, true);


--
-- Name: Stack_stackId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Stack_stackId_seq"', 3, true);


--
-- Name: Student_studentId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Student_studentId_seq"', 3, true);


--
-- Name: Teacher_teacherId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Teacher_teacherId_seq"', 4, true);


--
-- Name: Admin Admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admin"
    ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("adminId");


--
-- Name: AppUser AppUser_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AppUser"
    ADD CONSTRAINT "AppUser_pkey" PRIMARY KEY ("userId");


--
-- Name: Logo Logo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Logo"
    ADD CONSTRAINT "Logo_pkey" PRIMARY KEY ("logoId");


--
-- Name: Request Request_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Request"
    ADD CONSTRAINT "Request_pkey" PRIMARY KEY ("requestId");


--
-- Name: Stack Stack_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Stack"
    ADD CONSTRAINT "Stack_pkey" PRIMARY KEY ("stackId");


--
-- Name: Student Student_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Student"
    ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("studentId");


--
-- Name: Teacher Teacher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Teacher"
    ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("teacherId");


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Admin_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Admin_email_key" ON public."Admin" USING btree (email);


--
-- Name: Admin_login_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Admin_login_key" ON public."Admin" USING btree (login);


--
-- Name: AppUser_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "AppUser_email_key" ON public."AppUser" USING btree (email);


--
-- Name: AppUser_login_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "AppUser_login_key" ON public."AppUser" USING btree (login);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

