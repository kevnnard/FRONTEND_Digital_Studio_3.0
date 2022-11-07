// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBug } from '@tabler/icons';

// constant
const icons = {
  IconBug
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: <FormattedMessage id="pages" />,
  caption: <FormattedMessage id="pages-caption" />,
  type: 'group',
  children: [
    {
      id: 'maintenance',
      title: <FormattedMessage id="maintenance" />,
      type: 'collapse',
      icon: icons.IconBug,
      children: [
        {
          id: 'error',
          title: <FormattedMessage id="error-404" />,
          type: 'item',
          url: '/pages/maintenance/error',
          target: true
        },
        {
          id: 'under-construction',
          title: <FormattedMessage id="under-construction" />,
          type: 'item',
          url: '/pages/maintenance/under-construction',
          target: true
        }
      ]
    }
  ]
};

export default pages;
