// import React from 'react';

// import theme from 'themming';
// import useWindowWidth from 'shared/hooks/useWindowWidth';
// import { IEvent, ViewType } from 'types/event';
// import Surface from 'components/surface';
// import GridView from './parts/gridView';
// import ListView from './parts/listView';

// interface Props {
//   event: IEvent;
//   viewType?: ViewType;
//   onClick?: () => void;
// }

// const Event = ({ viewType, event, onClick }: Props) => {
//   const upMobile = useWindowWidth() > theme.breakpoints.mobile;

//   const surfaceSize = () => {
//     if (upMobile)
//       return {
//         height: `${viewType === 'grid' ? '296px' : '72px'}`,
//         width: `${viewType === 'grid' ? 'auto' : '100%'}`,
//         padding: `${viewType === 'list' ? '0 32px 0 32px' : '32px'}`,
//       };

//     return {
//       height: `${viewType === 'list' ? '136px' : '296px'}`,
//       width: '98%',
//       padding: `${viewType === 'list' ? '5.28px 16px 16px 16px' : '24px'}`,
//     };
//   };
//   return (
//     <Surface {...surfaceSize()}>
//       {viewType !== 'list' && <GridView event={event} onClick={onClick} />}
//       {viewType === 'list' && <ListView event={event} onClick={onClick} />}
//     </Surface>
//   );
// };

// export default React.memo(Event);
export default {};
