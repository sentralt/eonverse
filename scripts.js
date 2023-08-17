document.addEventListener("DOMContentLoaded", function() {
    const announcementLink = document.querySelector("nav ul li:nth-child(3) a");

    // Replace with your channel and server IDs
    const channelId = "1141095181886697673";
    const serverId = "1141038057647243275";

    announcementLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = `https://discord.com/channels/${serverId}/${channelId}`;
    });
});
