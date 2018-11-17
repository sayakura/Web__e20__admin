<template>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><i class="fa fa-braille"></i> Dashboard</a>
        <li class="nav-item dropdown" style="list-style:none; padding-right:100px;">
        <a class="nav-link dropdown-toggle float-right text-white" href="#" id="nav-logout" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-sign-out-alt pr-1"></i>Logout
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#"><i class="fas fa-home pr-1"></i>Back to main page</a>
            <a class="dropdown-item" href="#"><i class="fas fa-running pr-1"></i>Logout</a>
            </div>
        </li>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>

</style>
