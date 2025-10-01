import styled, { keyframes } from 'styled-components';
import { useColor } from '@/providers/theme-provider';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div<{ 
  bgColor: string; 
  textColor: string; 
  size?: 'small' | 'medium' | 'large';
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => {
    switch (props.size) {
      case 'small': return '1rem';
      case 'large': return '4rem';
      default: return '2rem';
    }
  }};
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  min-height: ${props => {
    switch (props.size) {
      case 'small': return '100px';
      case 'large': return '400px';
      default: return '200px';
    }
  }};
`;

const Spinner = styled.div<{ 
  spinnerColor: string; 
  size?: 'small' | 'medium' | 'large';
}>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '20px';
      case 'large': return '60px';
      default: return '40px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '20px';
      case 'large': return '60px';
      default: return '40px';
    }
  }};
  border: 3px solid ${props => props.spinnerColor}20;
  border-top: 3px solid ${props => props.spinnerColor};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

const LoadingText = styled.p<{ textColor: string }>`
  color: ${props => props.textColor};
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
`;

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Loading({ 
  message = 'Loading...', 
  size = 'medium' 
}: LoadingProps) {
  const bgColor = useColor('background.background-primary');
  const textColor = useColor('content.content-primary');
  const spinnerColor = useColor('border.border-focus');

  return (
    <LoadingContainer bgColor={bgColor} textColor={textColor} size={size}>
      <Spinner spinnerColor={spinnerColor} size={size} />
      <LoadingText textColor={textColor}>{message}</LoadingText>
    </LoadingContainer>
  );
}
