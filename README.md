# Alexa-Party-Mode

This setup has a number of moving parts that all have to work together:

    First, the commands are processed through either Alexa or the Google Home using their respective IFTTT channels.
    Then, IFTTT triggers the "Maker" channel to send the appropriate request to our home network which has an exposed port that will accept these requests and direct them to our NodeJS server.
    The NodeJS server will manage state and talk to our various devices using their respective APIs in the form of NodeJS libraries or simple HTTP requests.



