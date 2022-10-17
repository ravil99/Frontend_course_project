<script lang="ts">
    let menu: boolean = false;

</script>

<!-- Navigation element -->
<nav class="nav bd-container">
        
    <div class="{menu === true ? 'nav__menu show-menu' : 'nav__menu'}" 
         id="nav-menu">

        <!-- Can be changed to #each loop nav__link element-->

        <ul class="nav__list">
            <!-- Home-->
            <li class="nav__item">
                <a href="#home" class="nav__link active-link"
                    on:click="{() => menu = !menu}">
                    <i class='bx bx-home-alt-2 nav___icon' ></i>Home
                </a>
            </li>

            <!-- Profile-->
            <li class="nav__item">
                <a href="#profile" class="nav__link"
                    on:click="{() => menu = !menu}">
                    <i class='bx bx-user-circle nav___icon' ></i>Profile
                </a>
            </li>

            <!-- Hobbies-->
            <li class="nav__item">
                <a href="#hobbies" class="nav__link"
                    on:click="{() => menu = !menu}">
                    <i class='bx bx-wink-smile'></i>Hobbies
                </a>
            </li>
        </ul>
    </div>
    
    <div class="nav__toggle" id="nav-toggle" 
        on:click="{() => menu = !menu}">
        <i class='bx bx-grid-alt' ></i>
    </div>

</nav>

<style>

    .nav__menu{
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        padding: 2rem 1.5rem;
        background-color: var(--body-color);
        box-shadow: 0 1px 4px rgba(0,0,0,.1);
        border-radius: 1rem 1rem 0 0;
        z-index: var(--z-fixed);
        transition: .3s;
    }

	.show-menu{
    bottom: var(--header-height);
	}

	.nav{
	    height: var(--header-height);
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	}

	.bd-container{
    max-width: 968px;
    width: calc(100% - 3rem);
    margin-left: var(--mb-3);
    margin-right: var(--mb-3);
	}

	.nav__list{
	    display: grid;
	    grid-template-columns: repeat(3, 1fr);
	    gap: 2 rem;
	}

	.nav__item{
    text-align: center;
	}

	.nav__link{
    display: flex;
    flex-direction: column;
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    font-weight: var(--font-medium);
	}

	.nav__link:hover{
	    color: var(--title-color)
	}

	.active-link{
    color: var(--title-color);
	}

	.nav__toggle{
    color: var(--title-color);
    font-weight: var(--font-medium);
	font-size: 1.2rem;
    cursor: pointer;
}
</style>