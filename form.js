
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $occasion = isset($_POST['occasion']) ? strip_tags(trim($_POST['occasion'])) : '';
    $date = isset($_POST['date']) ? strip_tags(trim($_POST['date'])) : '';
    $guests = isset($_POST['guests']) ? strip_tags(trim($_POST['guests'])) : '';
    $requests = isset($_POST['requests']) ? strip_tags(trim($_POST['quests'])) : '';

    // If no errors, send email
    if (empty($errors)) {
        // Recipient email address (replace with your own)
        $recipient = "stephanie@thiefnyc.com";

      
    }
}
