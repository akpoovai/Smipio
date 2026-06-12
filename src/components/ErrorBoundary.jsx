import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[smipio]', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: '2rem',
            fontFamily: 'system-ui, sans-serif',
            maxWidth: '48rem',
            margin: '0 auto',
          }}
        >
          <h1 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#444', marginBottom: '1rem' }}>
            The app crashed while rendering. Open the browser developer console for
            the full error stack.
          </p>
          <pre
            style={{
              overflow: 'auto',
              padding: '1rem',
              background: '#f4f4f5',
              borderRadius: '8px',
              fontSize: '13px',
            }}
          >
            {String(this.state.error)}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
