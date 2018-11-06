<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:ac="http://atlassian.com/content"
    xmlns:ri="http://atlassian.com/resource/identifier">

    <!-- Output the ac:plain-text-link-body with a CDATA block instead of escaping, like it is the case in Confluence storage -->
    <xsl:output method="xml" cdata-section-elements="ac:plain-text-link-body ac:plain-text-body" />

    <!-- Add the space-key attribute to ri:page (links) when it is missing -->
    <xsl:template match="ri:page[@ri:content-title][not(@ri:space-key) and not(contains(@ri:content-title,'[Customer]')) and not(contains(@ri:content-title,'[ProjectName]'))]">
        <xsl:copy>
            <xsl:attribute name="ri:space-key">{0}</xsl:attribute>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>

    <!-- Remove the <ac:parameter ac:name="revision">*</ac:parameter> tag in the <ac:structured-macro ac:name="drawio"> tags,
    to avoid binding draw.io macros to wrong version of diagram -->
    <xsl:template match="ac:structured-macro[@ac:name='drawio']/ac:parameter[@ac:name='revision']" />
    
    <!-- Copy everything else as is -->   
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>