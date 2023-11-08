<?php

/* Configuration -----------------------------------------*/


?>

<?php

/*-------------------------------------------------------*/
/* Decide if we should display a new form or send the */
/* form data by email. */
/* To make this decision, the script can check for the */
/* existence of 1) the action variable defined by a */
/* hidden field; 2) a required form field that you know */
/* will always be set on submission; or you may set the */
/* action variable to a particular value that can be */
/* checked to determine the action to take. I chose */
/* to simply check for the existence of the hidden */
/* action variable (which is always set as long as we */
/* give a value in the hidden field). */
/*-------------------------------------------------------*/

if ($frmAction)
{

/*-------------------------------------------------------*/
/* A thank you message (or other response) goes here. We */
/* switch to HTML mode to make it easy to include any */
/* tags you wish without worrying about quoted */
/* attributes. */
/*-------------------------------------------------------*/

?>

<div align="center">
<table width="350" border="2">
<tr>
<td bgcolor="#C0C0C0">
<p>Thank you for requesting a personalized quote for our products and services.
</p>
</td>
<td>
<pre>
<?php
print_r( $_REQUEST );
?>
</pre>
</td>
</tr>
</table>
</div>



<?php

/*-------------------------------------------------------*/
/* The real work gets done here by opening a pipe to */
/* sendmail, which sends the contents of the submitted */
/* form by email to the address specified in the */
/* configuation section (which can acutally be an */
/* an included initialization file if you want to get */
/* fancy). For each variable we expect the form to */
/* to submit, we output as part of the email. */
/*-------------------------------------------------------*/
$body = "This was submitted\n\n";

foreach($_POST as $field => $value ) {
  $body .= sprintf( "%s = %s\n", $field, $value );
}

mail("mckids@voyager.net", "Message from website", $body, 'From: "WebComments" <mckids@voyager.net>' );
mail("mckids@voyager.net", "About $frmName", $body, "From: $frmEmail\nX-Mailer: PHP/" . phpversion());

exit;

} else {
// start else clause

?>

<html>
<head>
<title>Joy Yu Hoffman - Biography</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="keywords" content="Chinese music, Kong Hou music, chinese harp,
Asian harp music, Joy Yu Hoffman, historical harp">


<LINK REL="stylesheet" HREF="css/style.css" TYPE="text/css">
</head>
<body>
    <div id="header"></div>
    <div id="listmenu" style="padding:0 0 0 30px;">
    	<ul>
    	<li><a href="index.html">Home</a></li>
    	<li><a href="#">About Joy Yu</a></li>
    	<li><a href="press.html" title="What people have to say about Joy Yu">Press</a></li>
    	<li><a href="#">Links</a></li>
    	<li><a href="#">CDs</a></li>
    	<li><a href="listen.html">Listen</a></li>
    	<li><a href="konghou01.html">The Kong Hou</a></li>
    	<li><a href="services.html" title="Musical services provided by Joy">Services</a></li>
    	<li><a href="teaching.html" title="Private music lessons from Joy">Teaching</a></li>
    	</ul>
    </div>

	<div style="clear: left;"></div>
	<div id="maincolumn">
	<div id="maincolumn_content">

<div align="center">
<form action="mc1.php" method="post">
<table>
<tr><td colspan="2">
<p>Please enter your information for a personal quote.
</p>
</td>
</tr>
<tr>
<td>Name:</td>
<td><input type="text" name="frmName" size="24">
</td>
</tr>
<tr>
<td>Phone:</td>
<td><input type="text" name="frmPhone" size="24">
</td>
</tr>
<tr>
<td>Fax:
</td>
<td><input type="text" name="frmFax" size="24">
</td>
</tr>
<tr>
<td>Email:
</td>
<td> <input type="text" name="frmEmail" size="24"><br>
</td>
</tr>
<tr>
<td>Address:
</td>
<td><input type="text" name="frmAddress" size="24">
</td>
</tr>
<tr>
<td>Price Range:
</td>
<td><input type="text" name="frmPriceRange" size="24">
</td>
</tr>
<tr>
<td>Details:
</td>
<td><input type="text" name="frmFurther" size="24">
</td>
</tr>
<tr>
<td>
<textarea name="frmMcMsg">
This is all there is
</textarea>
</td>
</tr>
<tr>
<td>
<!-- To determine whether the script should display the form or mail the data, you can check for existence of a required field or this special action variable. -->
<input type="hidden" name="frmAction" value="formmail">
<input type="hidden" name="whereFrom" value="">
<input type="submit" value="Submit">
</td>
<td>&nbsp;
</td>
</table>
</div>
<br>

</form>

<script>
document.forms[0].whereFrom.value = "duh";
</script>


	</div><!--maincolumn_content-->
	</div><!--maincolumn-->

<div id="footer">
<div id="footer_content">
<div style="float: left;">All materials &copy;2006 - Joy Yu Hoffman</div>
<div style="text-align: right; width: 100%;">Web design by mcmarkio</div>
</div></div>

<table width=210 border="1">

<tr>

<td><b><p align=center>AC & Heating Connect Feed</p></b></td>

</tr>

<tr>

<td>
<script>
<?php
$data = file_get_contents('http://app.feed.informer.com/digest3/F9IB83KTVO.js'); //will block
echo $data;
?>
</script>

<noscript><a href="http://app.feed.informer.com/digest3/F9IB83KTVO.html">Click for &quot;AC and Heating Connect&quot;.</a>

Powered by <a href="http://feed.informer.com/">RSS Feed Informer</a></noscript></td>

</tr>

</table>

</body>

</html>
<?php
} // end else clause
?>