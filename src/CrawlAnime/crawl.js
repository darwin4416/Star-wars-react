import React, { Component } from 'react';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: '#000',
    overflow: 'hidden',
  },
  fade: {
    position: 'relative',
    width: '100%',
    minHeight: '50vh',
    top: '-25px',
    backgroundImage: 'linear-gradient(0deg, transparent, black 75%)',
    zIndex: 1,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: '800px',
    color: '#feda4a',
    fontFamily: "'Pathway Gothic One', sans-serif",
    fontSize: '500%',
    fontWeight: '600',
    letterSpacing: '6px',
    lineHeight: '150%',
    perspective: '400px',
    textAlign: 'justify',
  },
  crawl: {
    position: 'relative',
    top: '9999px',
    transformOrigin: '50% 100%',
    animation: 'crawl 60s linear',
  },
  title: {
    fontSize: '90%',
    textAlign: 'center',
  },
  subTitle: {
    margin: '0 0 100px',
    textTransform: 'uppercase',
  }
}

class Crawl extends Component {
  render() {
    const {
     
      textStyles,
      title,
      text
    } = this.props

    return (   
        <div className='crawler' style={styles.container}>
            <div style={styles.fade}>
            </div>
            <section style={styles.textContainer}>
                <div style={styles.crawl}>
                    <div style={styles.title}>
                        <p className='title'>{title}</p>
                    </div>
                    <p className='text' style={textStyles}>{text}</p>
                </div>
            </section>
        </div>
    )
  }
} 


export default Crawl