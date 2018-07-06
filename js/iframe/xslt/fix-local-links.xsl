<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:ac="http://atlassian.com/content"
    xmlns:ri="http://atlassian.com/resource/identifier">

    <!-- Output the ac:plain-text-link-body with a CDATA block instead of escaping, like it is the case in Confluence storage -->
    <xsl:output method="xml" cdata-section-elements="ac:plain-text-link-body ac:plain-text-body" />

    <!-- Add the space-key attribute to ri:page (links) when it is missing -->
    <xsl:template match="ri:page[@ri:content-title][not(@ri:space-key)]">
        <xsl:copy>
            <xsl:attribute name="ri:space-key">{0}</xsl:attribute>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
    <!-- Copy everything else as is -->   
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>