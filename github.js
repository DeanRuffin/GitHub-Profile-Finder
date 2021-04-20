class Github{
    constructor() {
        this.client_id = '73e23ea14d0cf780c645';
        this.client_secret = '55cbbe8fdd0c2d709b96b79cedaebbeb53bf69da';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile
        }
    }
}