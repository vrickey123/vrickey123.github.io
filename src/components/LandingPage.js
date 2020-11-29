const LandingPage = (props) => (
    <div class="vh-100 d-flex flex-column justify-content-center">
        <h1 class="display-1">{props.title}</h1>
        <div class="rounded bg-dark" style={{height: 10}}/>
        <h2 class="mt-3 text-muted">{props.summary}</h2>
    </div>
);

export default LandingPage;