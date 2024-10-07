<template>
  <div class="container p-4">
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your full name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter your password">
        </div>
        <div class="mb-3">
            <label for="confirm-password" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="confirm-password" placeholder="Confirm your password">
        </div>
        <div class="mb-3">
            <label for="confirm-password" class="form-label">File</label>
            <input type="file" class="form-control" id="file" placeholder="File">
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
    </form>
  </div>
</template>