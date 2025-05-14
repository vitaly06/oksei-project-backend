--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

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


ALTER TABLE public."Admin_adminId_seq" OWNER TO postgres;

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


ALTER TABLE public."AppUser_userId_seq" OWNER TO postgres;

--
-- Name: AppUser_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."AppUser_userId_seq" OWNED BY public."AppUser"."userId";


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


ALTER TABLE public."Request_requestId_seq" OWNER TO postgres;

--
-- Name: Request_requestId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Request_requestId_seq" OWNED BY public."Request"."requestId";


--
-- Name: Student; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Student" (
    "studentId" integer NOT NULL,
    "fullName" text NOT NULL,
    industry text NOT NULL,
    description text NOT NULL,
    "projectPhotoPath" text NOT NULL,
    "studentPhotoPath" text NOT NULL
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


ALTER TABLE public."Student_studentId_seq" OWNER TO postgres;

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


ALTER TABLE public."Teacher_teacherId_seq" OWNER TO postgres;

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
-- Name: Request requestId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Request" ALTER COLUMN "requestId" SET DEFAULT nextval('public."Request_requestId_seq"'::regclass);


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
-- Data for Name: Request; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Request" ("requestId", "organizationName", "contactPerson", "phoneNumber", email, deadline, "filePath") FROM stdin;
\.


--
-- Data for Name: Student; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Student" ("studentId", "fullName", industry, description, "projectPhotoPath", "studentPhotoPath") FROM stdin;
\.


--
-- Data for Name: Teacher; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Teacher" ("teacherId", "photoPath", "fullName", description) FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
d234df21-f367-4f05-8ccf-f0dc86979675	02a111489dde22592f3587fa5684ae3dfb98e6dd3f7e55df266cdde63a3c48a4	2025-03-05 13:00:21.604856+05	20250110155536_update_student	\N	\N	2025-03-05 13:00:21.591193+05	1
1d901a4c-2993-47d1-903b-b8acfed717e7	0bd4dd2ac99dd666f4557da1495fd4f268016cabf6c825ad8338161155bd0142	2025-03-05 13:00:21.348497+05	20241224054358_init	\N	\N	2025-03-05 13:00:21.328869+05	1
55d5894a-6a7b-4575-9597-269ab0fc3e60	65b12fa64e0510f7eb77f91c54e501f91d7d28583829b69ddc9e714e8590dcb2	2025-03-05 13:00:21.37331+05	20241224081828_create_user_model	\N	\N	2025-03-05 13:00:21.350985+05	1
04674295-a9d6-4260-9d30-5e62ef7ea4a6	db6877ead825796b1f7c810e7b4f112ee15e4a746a9928d0ca66b276bce5e05e	2025-03-05 13:00:21.410456+05	20241225164346_update_user	\N	\N	2025-03-05 13:00:21.376144+05	1
283b3678-893d-4bbf-9183-26d2f9c8b58c	f9e440d5853c2754c22e17d1a40e03a9d93710667f1f6de9a1a6558f588aef1a	2025-03-05 13:00:21.613069+05	20250118101150_edit_teacher_fields	\N	\N	2025-03-05 13:00:21.606775+05	1
aa9055da-d73a-4838-b991-282a868d5bef	76dcd8609309af740831bb2d8961d2b49a75e3845178dc353105ce0f66e6da68	2025-03-05 13:00:21.432411+05	20241226083713_add_cards	\N	\N	2025-03-05 13:00:21.414536+05	1
9b08827f-76ac-400e-9c2a-27685a2320ce	ca6783303fef021672ba43d6b443aae5c71695aa176ae6a48103c73e47cd78aa	2025-03-05 13:00:21.454189+05	20250105163112_add_admin	\N	\N	2025-03-05 13:00:21.435295+05	1
74455d9f-c77b-4020-8f19-8f051ce121c9	7f5625d4e52e2026dd1c2ccc6bd56ccc90634993941c68c4852de3a502aadebf	2025-03-05 13:00:21.469304+05	20250105163418_edit_admin	\N	\N	2025-03-05 13:00:21.456487+05	1
bb43a737-5cec-472c-9988-539e0d4c5f9e	acad8e98ccb28a72acae62bbf798ace05277a798b21b28c2326a99eab8dd121f	2025-03-05 13:00:21.622349+05	20250120072724_update_request	\N	\N	2025-03-05 13:00:21.615025+05	1
99a31786-5399-4c4b-832b-3e6c47e9c15f	dc47e7d19074957e0fa78189bfcfa4223f1e64e65acecba4b5434cf79df73247	2025-03-05 13:00:21.488205+05	20250107071407_add_teacher	\N	\N	2025-03-05 13:00:21.471657+05	1
24a2ed9b-c44b-488e-a3d7-17e9e41c2b54	679f87a3a0032a5f4f77b6826a46633e0c9799c119a26177e42a45a879bddf58	2025-03-05 13:00:21.506151+05	20250108100640_add_student	\N	\N	2025-03-05 13:00:21.491436+05	1
47e7e76f-f50f-4a4e-a2db-0479c0beaa00	a68138a46cb82d3b1c2f875afe6e93d283a6154ec57136026ae8803144499e3b	2025-03-05 13:00:21.525327+05	20250109152155_fix_student	\N	\N	2025-03-05 13:00:21.508552+05	1
99b60d0d-2a98-43d1-9a01-1031f36329aa	4eac04f448a3c60c4bed3ba8d605250bb768baa42c7289d2cb10d590d5e991b4	2025-03-05 13:00:22.920116+05	20250305080022_clear_backend	\N	\N	2025-03-05 13:00:22.912283+05	1
0620a1e1-3b8d-4370-95bf-7e1b9151ce96	5012f5a75206d8930a1457d394afd0892360a1f75cd9fd561c55e433b5e13921	2025-03-05 13:00:21.541512+05	20250109161616_add_logo	\N	\N	2025-03-05 13:00:21.527186+05	1
051a8a6d-d45b-4834-9892-0e28bb16c042	f33b94bb8f9bd5419c8601f0e7c90eff958559937372e2389b26bd72b75f9635	2025-03-05 13:00:21.559689+05	20250109174910_add_stack	\N	\N	2025-03-05 13:00:21.544329+05	1
46ba3cfb-928a-4153-9b5d-e132dc00e38f	851853fa6823396efcb9027abcfd1c97cd2a2d026a6975180a46be1f7233333c	2025-03-05 13:00:21.578533+05	20250109180953_new_stack	\N	\N	2025-03-05 13:00:21.562875+05	1
9d333aa6-d37c-4dbb-852a-e735bf59d419	165abc5833ab32440701795894fa30bc6896526bb809b6ff5d9899eab662aa24	2025-04-11 11:26:55.706962+05	20250411062655_delete_task_type	\N	\N	2025-04-11 11:26:55.699404+05	1
c5a76c0d-3d4f-481d-907a-9878ee6a000f	6da0d3b0f970ab4b71b8a9d28c71fe60bcb05449c850b58a3412a2f2f435ad15	2025-03-05 13:00:21.58963+05	20250110155438_delete_student	\N	\N	2025-03-05 13:00:21.580453+05	1
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
-- Name: Request_requestId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Request_requestId_seq"', 1, false);


--
-- Name: Student_studentId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Student_studentId_seq"', 1, false);


--
-- Name: Teacher_teacherId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Teacher_teacherId_seq"', 1, false);


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
-- Name: Request Request_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Request"
    ADD CONSTRAINT "Request_pkey" PRIMARY KEY ("requestId");


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
-- PostgreSQL database dump complete
--

