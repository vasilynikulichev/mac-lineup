import {Guide} from './Pages/Guide/Guide'

export interface IRoute {
  path: string;
  component: React.FunctionComponent,
}

export const routes: IRoute[] = [
  {
    path: '/calendar',
    // component: Calendar,
    component: () => null, //'Calendar',
  },
  {
    path: '/guide',
    component: Guide,
  },
]