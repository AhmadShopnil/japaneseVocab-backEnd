import { Router } from 'express';
import { lessonRoutes } from '../modules/lesson/lesson.route';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/auth/auth.route';
import { vocabularyRoutes } from '../modules/vocabulary/vocabulary.route';
import { tutotialRoutes } from '../modules/tutorial/tutorial.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/lessons',
    route: lessonRoutes,
  },
  {
    path: '/vocabularies',
    route: vocabularyRoutes,
  },
  {
    path: '/tutorials',
    route: tutotialRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
