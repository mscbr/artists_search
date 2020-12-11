// import React, { useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';

// import { formatDateFromISO, deepCompareObj } from 'shared/helpers';
// import theme from 'themming';
// import useWindowWidth from 'shared/hooks/useWindowWidth';
// import { setButton, isExpired } from 'components/event/helpers';
// import Detail from 'components/typography/detail';
// import Title from 'components/typography/title';
// import Description from 'components/typography/description';
// import Capacity from 'components/event/parts/capacity';
// import Button from 'components/button';
// import { IEvent } from 'types/event';
// import { AppState } from 'store/index';
// import Cell from './cell';

// const StyledListView = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   height: 100%;
//   @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
//     flex-direction: row;
//     align-items: baseline;
//     white-space: nowrap;
//   }
// `;
// const StyledOverflow = styled.div<{ color?: string }>`
//   text-align: left;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   color: ${({ color }) => color || 'inherit'};
// `;
// const StyledLink = styled.div<{ titleLink: boolean }>`
//   cursor: ${({ titleLink }) => (titleLink ? 'pointer' : 'initial')};
//   &:hover {
//     opacity: ${({ titleLink }) => (titleLink ? 0.8 : 1)};
//   }
//   transition: 0.3s;
// `;
// const StyledDescription = styled.div`
//   margin-top: -8px;
//   text-align: justify;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   color: ${theme.palette.dropdown};
//   @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
//     margin-top: initial;
//     text-align: left;
//   }
// `;
// const StyledFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   margin: 16px auto 0 auto;
// `;

// interface Props {
//   event: IEvent;
//   onClick?: () => void;
// }

// const ListView = ({
//   event: {
//     id: eventId,
//     startsAt,
//     title,
//     capacity,
//     attendees,
//     owner: { firstName, lastName, id: ownerId },
//     description,
//   },
//   onClick,
// }: Props) => {
//   const history = useHistory();
//   const {
//     location: { pathname },
//   } = history;
//   const titleLink = pathname.indexOf('/event/') === -1;
//   const id = useSelector((state: AppState) => state.userReducer.user?.id);
//   const [loading, setLoading] = useState(false);
//   const upMobile = useWindowWidth() > theme.breakpoints.mobile;
//   const [btnLabel, btnColor, handleClick] = setButton(
//     id || '',
//     ownerId,
//     attendees.map(user => user.id)
//   );

//   const handleEventAction = useCallback(async () => {
//     setLoading(true);
//     await handleClick(eventId);
//     if (onClick) onClick();
//     setLoading(false);
//   }, [handleClick, onClick, eventId]);

//   return (
//     <>
//       {!upMobile ? (
//         <StyledListView>
//           <StyledLink
//             titleLink={titleLink}
//             onClick={() =>
//               titleLink && history.push(`/event/detail/${eventId}`)
//             }
//           >
//             <Title>{title}</Title>
//           </StyledLink>
//           <StyledDescription>
//             <Description>{description}</Description>
//           </StyledDescription>
//           <StyledFooter>
//             <div>
//               <Detail>{formatDateFromISO(startsAt)}</Detail>
//               <Capacity capacity={capacity} atendees={attendees.length} />
//             </div>
//             <Button
//               label={btnLabel}
//               color={btnColor}
//               onClick={handleEventAction}
//               disabled={isExpired(startsAt)}
//               loading={loading}
//             />
//           </StyledFooter>
//         </StyledListView>
//       ) : (
//         <StyledListView>
//           <Cell width="245px" margin="0 40px 0 0">
//             <StyledOverflow color={theme.palette.data}>
//               <StyledLink
//                 titleLink={titleLink}
//                 onClick={() =>
//                   titleLink && history.push(`/event/detail/${eventId}`)
//                 }
//               >
//                 <Title fontSize={theme.typography.fontSize[18]}>{title}</Title>
//               </StyledLink>
//             </StyledOverflow>
//           </Cell>
//           <Cell width="240px" margin="0 40px 0 0">
//             <StyledDescription>
//               <Description>{description}</Description>
//             </StyledDescription>
//           </Cell>
//           <Cell width="101px" margin="0 40px 0 0">
//             <StyledOverflow color={theme.palette.owner}>
//               <Detail color={theme.palette.owner}>
//                 {`${firstName} ${lastName}`}
//               </Detail>
//             </StyledOverflow>
//           </Cell>
//           <Cell width="138px" margin="0 40px 0 0">
//             <StyledOverflow color={theme.palette.detail}>
//               <Detail>{formatDateFromISO(startsAt)}</Detail>
//             </StyledOverflow>
//           </Cell>
//           <Cell width="102px" margin="0 40px 0 0">
//             <Capacity capacity={capacity} atendees={attendees.length} />
//           </Cell>
//           <Cell>
//             <Button
//               label={btnLabel}
//               color={btnColor}
//               onClick={handleEventAction}
//               disabled={isExpired(startsAt)}
//             />
//           </Cell>
//         </StyledListView>
//       )}
//     </>
//   );
// };

// function compareProps(prevEvent: Props, nextEvent: Props) {
//   return deepCompareObj(prevEvent, nextEvent);
// }

// export default React.memo(ListView, compareProps);
export default {};
