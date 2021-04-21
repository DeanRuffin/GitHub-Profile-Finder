class Github{
    constructor() {
        this.client_id = '73e23ea14d0cf780c645';
        this.client_secret = '910f9b58166c7c32881346fe82f8421eb1d6dac1';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}