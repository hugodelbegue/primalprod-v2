<template>
    <div class="avatar">
        <img class="avatar-img" alt="Avatar" src="./avatar.svg" />
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    display: flex;
    place-content: center;
    place-items: flex-start;
    padding-left: 8rem;
    padding-right: 2rem;
    border: 4px solid transparent;
    background: var(--background-header-page);

    &::before {
        content: "";
        width: 70px;
        height: 70px;
        background: var(--orange);
        position: absolute;
        animation: opacity 4750ms ease both;
        opacity: 0;
        display: flex;
        place-content: center;
        place-items: center;
        font-weight: var(--f-bold);
        color: var(--black);
        font-family: var(--f-rock);
    }

    &::after {
        content: "";
        width: 20px;
        height: 17px;
        border-radius: 50%;
        background: var(--orange-1);
        border: 1px solid var(--black);
        position: absolute;
        visibility: hidden;
        transform: translate(-333%, 110%);
        background: var(--gray-very-light);
        animation: visibility 1625ms ease both;
        animation-delay: 1750ms;
    }
}

.avatar-img {
    width: 125px;
    height: auto;
    aspect-ratio: calc(264 / 447) / 1;
}

// Animation
@keyframes opacity {
    0% {
        opacity: 0;
        filter: blur(5px);
        transform: translate(0%, -250%) scale(0);
        border-radius: 50%;
    }

    28% {
        opacity: 1;
        filter: blur(0px);
        transform: translate(-180%, -20%) scale(1);
        border-radius: 0%;
    }

    34% {
        filter: blur(15px);
        transform: translate(-180%, -20%) scale(1.3);
        background: var(--orange-1);
        border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
    }

    36% {
        border: 0px solid transparent;
        opacity: .8;
        filter: blur(5px);
        transform: translate(-180%, -20%) matrix(1, 2, 1, 1, 5, 6);
        background: var(--red);
        content: "";
        height: 70px;
    }

    38% {
        border: 1px solid var(--black);
        opacity: 1;
        filter: blur(0px);
        transform: translate(-180%, -20%);
        background: var(--gray-very-light);
        border-radius: 50%;
        content: "Hey !";
        font-size: 14px;
        height: 50px;
    }

    100% {
        border: 1px solid var(--black);
        opacity: 1;
        filter: blur(0px);
        transform: translate(-180%, -20%);
        background: var(--gray-very-light);
        border-radius: 50%;
        content: "Hey !";
        font-size: 14px;
        height: 50px;
    }
}

@keyframes visibility {
    0% {
        visibility: hidden;
    }

    100% {
        visibility: visible;
    }
}
</style>