// import React, { useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';

// import { formatDateFromISO, deepCompareObj } from 'shared/helpers';
// import theme from 'themming';
// import { setButton, isExpired } from 'components/event/helpers';
// import Detail from 'components/typography/detail';
// import Title from 'components/typography/title';
// import Subtitle from 'components/typography/subtitle';
// import Description from 'components/typography/description';
// import Capacity from 'components/event/parts/capacity';
// import Button from 'components/button';
// import { IEvent } from 'types/event';
// import { AppState } from 'store/index';

// const StyledGridView = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   height: 100%;
// `;
// const StyledTitle = styled.div<{ titleLink: boolean }>`
//   margin: 10px 0 0 0;
//   white-space: nowrap;
//   cursor: ${({ titleLink }) => (titleLink ? 'pointer' : 'initial')};
//   &:hover {
//     opacity: ${({ titleLink }) => (titleLink ? 0.8 : 1)};
//   }
//   transition: 0.3s;
// `;
// const StyledDescription = styled.div`
//   margin-top: 48px;
//   text-align: justify;
//   line-height: 24px;
//   @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
//     text-align: left;
//     max-height: 48px;
//     overflow: hidden;
//   }
// `;
// const StyledFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   width: 100%;
//   margin: auto auto 0;
// `;

// interface Props {
//   event: IEvent;
//   onClick?: () => void;
// }

// const GridView = ({
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
//     <StyledGridView>
//       <Detail>{formatDateFromISO(startsAt)}</Detail>
//       <StyledTitle
//         titleLink={titleLink}
//         onClick={() => titleLink && history.push(`/event/detail/${eventId}`)}
//       >
//         <Title>{title}</Title>
//       </StyledTitle>
//       <Subtitle>{`${firstName} ${lastName}`}</Subtitle>
//       <StyledDescription>
//         <Description>{description}</Description>
//       </StyledDescription>
//       <StyledFooter>
//         <Capacity capacity={capacity} atendees={attendees.length} icon />
//         <Button
//           label={btnLabel}
//           color={btnColor}
//           disabled={isExpired(startsAt)}
//           onClick={handleEventAction}
//           loading={loading}
//         />
//       </StyledFooter>
//     </StyledGridView>
//   );
// };

// function compareProps(prevEvent: Props, nextEvent: Props) {
//   return deepCompareObj(prevEvent, nextEvent);
// }

// export default React.memo(GridView, compareProps);
export default {};
