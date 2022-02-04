SET check_function_bodies = false;
INSERT INTO public.clients (id, name, vat, address) VALUES (1, 'Francisco Javier', '75110036V', 'C/ Betania');
INSERT INTO public.clients (id, name, vat, address) VALUES (2, 'Francisco Javier 2', '75110036V', 'C/ Betania');
INSERT INTO public.clients (id, name, vat, address) VALUES (3, 'Francisco Javier 3', '75110036V', 'C/ Betania');
INSERT INTO public.clients (id, name, vat, address) VALUES (4, 'Francisco Javier 4', '75110036V', 'C/ Betania');
INSERT INTO public.clients (id, name, vat, address) VALUES (5, 'Francisco Javier 5', '75110036V', 'C/ Betania');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (1, '1-000001', '2022-01-28', 1, 'Francisco Javier', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (2, '1-000002', '2022-01-28', 2, 'Francisco Javier 2', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (3, '1-000003', '2022-01-28', 3, 'Francisco Javier 3', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (4, '1-000004', '2022-01-28', 4, 'Francisco Javier 4', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (5, '1-000005', '2022-01-28', 5, 'Francisco Javier 5', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (6, '1-000006', '2022-01-28', 1, 'Francisco Javier', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (7, '1-000007', '2022-01-28', 2, 'Francisco Javier 2', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (8, '1-000008', '2022-01-28', 3, 'Francisco Javier 3', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (9, '1-000009', '2022-01-28', 4, 'Francisco Javier 4', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (10, '1-000010', '2022-01-28', 5, 'Francisco Javier 5', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (11, '1-000011', '2022-01-28', 1, 'Francisco Javier', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (12, '1-000012', '2022-01-28', 2, 'Francisco Javier 2', '75110036V', '100.00', '21.00', '121.00');
INSERT INTO public.users (id, name) VALUES (1, 'Fran');
INSERT INTO public.users (id, name) VALUES (2, 'Manu');
SELECT pg_catalog.setval('public.clients_id_seq', 2, true);
SELECT pg_catalog.setval('public.invoices_id_seq', 1, true);
SELECT pg_catalog.setval('public.users_id_seq', 3, true);