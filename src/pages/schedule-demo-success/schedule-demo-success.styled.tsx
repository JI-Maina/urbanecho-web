import styled from 'styled-components';
import AppTheme from '@/lib/theme';

export const DemoSuccessContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${AppTheme.colors['background-primary']};
  padding: ${AppTheme.spacing['48']} ${AppTheme.spacing['24']};
`;

export const DemoSuccessContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${AppTheme.spacing['80']};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${AppTheme.layout.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${AppTheme.spacing['40']};
  }
`;

export const DemoSuccessLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DemoSuccessRight = styled.div`
  flex: 1;
  max-width: 500px;
`;

export const DemoSuccessVisual = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: linear-gradient(135deg, ${AppTheme.colors['background-positive']} 0%, ${AppTheme.colors['background-brand']} 100%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${AppTheme.spacing['24']};
  position: relative;
  overflow: hidden;

  .calendar-icon {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .weather-icons {
    display: flex;
    gap: ${AppTheme.spacing['12']};
    margin-bottom: ${AppTheme.spacing['20']};
    font-size: 20px;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${AppTheme.spacing['08']};
    width: 200px;
  }

  .calendar-day {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;

    &.active {
      background: rgba(255, 255, 255, 0.8);
      transform: scale(1.1);
    }
  }
`;

export const DemoSuccessHeader = styled.div`
  margin-bottom: ${AppTheme.spacing['40']};
`;

export const DemoSuccessTitle = styled.h1`
  ${AppTheme.typography.heading['32/bold']}
  color: ${AppTheme.colors['content-primary']};
  margin-bottom: ${AppTheme.spacing['16']};
  line-height: 1.3;
`;

export const DemoSuccessSubtitle = styled.p`
  ${AppTheme.typography.paragraph['16/400']}
  color: ${AppTheme.colors['content-secondary']};
  line-height: 1.6;
`;

export const DemoSuccessList = styled.div`
  margin-bottom: ${AppTheme.spacing['40']};

  h4 {
    ${AppTheme.typography.label['16/semibold']}
    color: ${AppTheme.colors['content-primary']};
    margin-bottom: ${AppTheme.spacing['20']};
  }
`;

export const DemoSuccessItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${AppTheme.spacing['12']};
  margin-bottom: ${AppTheme.spacing['16']};
  ${AppTheme.typography.paragraph['16/400']}
  color: ${AppTheme.colors['content-primary']};
  line-height: 1.5;
`;

export const DemoSuccessIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${AppTheme.colors['background-positive']};
  color: ${AppTheme.colors['content-primary-inverse']};
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const DemoSuccessButton = styled.button`
  width: 100%;
  padding: ${AppTheme.spacing['16']} ${AppTheme.spacing['24']};
  background: ${AppTheme.colors['background-brand']};
  color: ${AppTheme.colors['content-primary-inverse']};
  border: none;
  border-radius: 8px;
  ${AppTheme.typography.label['16/semibold']}
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: ${AppTheme.spacing['24']};

  &:hover:not(:disabled) {
    background: ${AppTheme.colors['background-brand-hover']};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const DemoSuccessFooter = styled.div`
  text-align: center;

  &.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${AppTheme.spacing['32']};
    border-top: 1px solid ${AppTheme.colors['border-subtle']};
    margin-top: ${AppTheme.spacing['48']};

    span {
      ${AppTheme.typography.paragraph['14/400']}
      color: ${AppTheme.colors['content-tertiary']};
    }

    .footer-links {
      display: flex;
      gap: ${AppTheme.spacing['24']};

      a {
        ${AppTheme.typography.paragraph['14/400']}
        color: ${AppTheme.colors['content-tertiary']};
        text-decoration: none;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: ${AppTheme.colors['content-brand']};
        }
      }
    }

    @media (max-width: ${AppTheme.layout.breakpoints.tablet}) {
      flex-direction: column;
      gap: ${AppTheme.spacing['16']};
    }
  }
`;

export const DemoSuccessFooterLink = styled.span`
  color: ${AppTheme.colors['content-brand']};
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
  ${AppTheme.typography.paragraph['16/400']}

  &:hover {
    color: ${AppTheme.colors['content-brand-hover']};
    text-decoration: underline;
  }
`;
