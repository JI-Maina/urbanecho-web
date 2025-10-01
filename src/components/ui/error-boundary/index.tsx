import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import { useColor } from '@/providers/theme-provider';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ErrorContainer = styled.div<{ 
  bgColor: string; 
  textColor: string; 
  borderColor: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: 8px;
  margin: 1rem;
  min-height: 200px;
`;

const ErrorTitle = styled.h2<{ textColor: string }>`
  color: ${props => props.textColor};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ErrorMessage = styled.p<{ textColor: string }>`
  color: ${props => props.textColor};
  margin-bottom: 1rem;
  text-align: center;
  opacity: 0.8;
`;

const RetryButton = styled.button<{ 
  bgColor: string; 
  textColor: string; 
  borderColor: string;
}>`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  border: 1px solid ${props => props.borderColor};
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid ${props => props.borderColor}40;
    outline-offset: 2px;
  }
`;

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorBoundaryFallback 
          error={this.state.error}
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}

interface ErrorBoundaryFallbackProps {
  error?: Error;
  onRetry: () => void;
}

function ErrorBoundaryFallback({ error, onRetry }: ErrorBoundaryFallbackProps) {
  const bgColor = useColor('background.background-primary');
  const textColor = useColor('content.content-primary');
  const borderColor = useColor('border.border-negative');
  const buttonBgColor = useColor('surface.surface-l0');

  return (
    <ErrorContainer 
      bgColor={bgColor} 
      textColor={textColor} 
      borderColor={borderColor}
    >
      <ErrorTitle textColor={textColor}>
        Something went wrong
      </ErrorTitle>
      <ErrorMessage textColor={textColor}>
        {error?.message || 'An unexpected error occurred while loading this component.'}
      </ErrorMessage>
      <RetryButton
        bgColor={buttonBgColor}
        textColor={textColor}
        borderColor={borderColor}
        onClick={onRetry}
      >
        Try Again
      </RetryButton>
    </ErrorContainer>
  );
}

export default ErrorBoundary;
