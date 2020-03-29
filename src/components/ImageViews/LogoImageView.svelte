<script>
    export let handleClick;
</script>

<style>
    .image-view {
        height: 2rem;
        margin: 0;
    }

    .image-view__image {
        height: 100%;
        width: auto;
    }
</style>

<figure class="image-view" on:click={handleClick}>
    <img
        src="images/nw-logo.svg"
        alt="Nate Walker Logomark"
        class="image-view__image"
    >
</figure>