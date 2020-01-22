function HomePage() {
  return <div>
    <p>Welcome to Next.js!</p>

    <h2 className="subheading">
      Learn how to add fonts in a React Project
  </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <hr />
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <style jsx>{`
    @font-face {
      font-family: 'Montserrat';
          src: url('/fonts/Montserrat-Regular.ttf');
          src: url('/fonts/Montserrat-Bold.ttf');
          src: url('/fonts/Montserrat-Black.ttf');
          src: url('/fonts/Montserrat-ExtraLight.ttf');
    }
        p {
          font-family: 'Montserrat';
        }
      `}</style>
  </div>
}

export default HomePage