// Example usage of the Button components

import React from 'react';
import { Button, LinkButton } from './';
import { ArrowRightIcon, PlusIcon } from '@phosphor-icons/react';

export function ButtonExamples() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Primary Buttons */}
      <section>
        <h3>Primary Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
          <Button variant="primary" size="medium" leftIcon={<PlusIcon />}>With Icon</Button>
          <Button variant="primary" size="medium" rightIcon={<ArrowRightIcon />}>Right Icon</Button>
          <Button variant="primary" size="medium" loading={loading} onClick={handleClick}>
            {loading ? 'Loading...' : 'Click me'}
          </Button>
          <Button variant="primary" size="medium" disabled>Disabled</Button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section>
        <h3>Secondary Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="secondary" size="small">Small</Button>
          <Button variant="secondary" size="medium">Medium</Button>
          <Button variant="secondary" size="large">Large</Button>
          <Button variant="secondary" size="medium" leftIcon={<PlusIcon />}>With Icon</Button>
          <Button variant="secondary" size="medium" rightIcon={<ArrowRightIcon />}>Right Icon</Button>
          <Button variant="secondary" size="medium" loading>Loading</Button>
          <Button variant="secondary" size="medium" disabled>Disabled</Button>
        </div>
      </section>

      {/* Destructive Buttons */}
      <section>
        <h3>Destructive Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="destructive" size="small">Delete</Button>
          <Button variant="destructive" size="medium">Remove</Button>
          <Button variant="destructive" size="large">Destroy</Button>
          <Button variant="destructive" size="medium" disabled>Disabled</Button>
        </div>
      </section>

      {/* Link Buttons */}
      <section>
        <h3>Link Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <LinkButton to="/home" variant="primary" size="medium">
            Go Home
          </LinkButton>
          <LinkButton to="/about" variant="secondary" size="medium">
            Learn More
          </LinkButton>
          <LinkButton 
            to="https://github.com" 
            variant="secondary" 
            size="medium" 
            external
            rightIcon={<ArrowRightIcon />}
          >
            External Link
          </LinkButton>
        </div>
      </section>

      {/* Full Width */}
      <section>
        <h3>Full Width</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Button variant="primary" size="medium" fullWidth>
            Full Width Primary
          </Button>
          <Button variant="secondary" size="medium" fullWidth>
            Full Width Secondary
          </Button>
        </div>
      </section>

    </div>
  );
}