<script context="module">
    export async function preload({ params }) {
        const response = await this.fetch(`portfolio/${ params.slug }.json`);
        const project = await response.json();

        if (response.status === 200) {
			return { project };
		}
        
        this.error(response.status, project.message);
    }
</script>

<script>
    export let project;
</script>

<style>
    :global(.project) { 
        width: 90%;
        margin: auto;
        font-size: 1.2rem; 
    }

    :global(.project h1),
    :global(.project h2),
    :global(.project h3),
    :global(.project h4),
    :global(.project h5),
    :global(.project h6) {
        margin-top: 0.5em;
        margin-bottom: 0.25em;
    }

    :global(.project h1) { font-size: 2em; }
    :global(.project h2) { font-size: 1.5em; }
    :global(.project h3) { font-size: 1.17em; }
    :global(.project h4) { font-size: 1em; }
    :global(.project h5) { font-size: 0.83em; }
    :global(.project h6) { font-size: 0.67em; }

    :global(.project pre),
    :global(.project code) {
        padding-left: 0.5em;
        padding-right: 0.5em;
        background-color: hsl(0, 0%, 93%);
        border: 1px solid hsl(0, 0%, 60%);
        border-radius: 5px;
    }

    :global(.project pre) { padding: 0.5em; }
    :global(.project pre > code) { all: unset; }
</style>

<article class="project">
    { @html project.html }
</article>