import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { cog, flash, list } from 'ionicons/icons';

import Home from './Home';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';

const Tabs = () => {
  const tabs = [
    {
      title: 'Home',
      href: '/home',
      icon: flash,
    },
    {
      title: 'Lists',
      href: '/lists',
      icon: list,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: cog,
    },
  ];

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/lists" render={() => <Lists />} exact={true} />
        <Route
          path="/lists/:listId"
          render={() => <ListDetail />}
          exact={true}
        />
        <Route path="/settings" render={() => <Settings />} exact={true} />
        <Route path="" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {tabs.map((tab, index) => (
          <IonTabButton tab={'tab' + index} key={'tab' + index} href={tab.href}>
            <IonIcon icon={tab.icon} />
            <IonLabel>{tab.title}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
