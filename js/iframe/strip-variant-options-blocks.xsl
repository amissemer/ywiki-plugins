<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ac="confluence.ac">

    <!-- Output the plain-text-body with a CDATA block instead of escaping, like it is the case in Confluence storage -->
    <xsl:output method="xml" cdata-section-elements="ac:plain-text-body" />

    <!-- For selection option blocks, keep the rich-text content from inside the block -->
    <xsl:template match="ac:structured-macro[@ac:name='divbox' and ac:parameter[@ac:name='class' and text()='{0}-{1}']]">
        <xsl:apply-templates select="ac:rich-text-body/*"/>
    </xsl:template>

    <!-- Completely strip the block and its content if it is for a non selected option -->
    <xsl:template match="ac:structured-macro[@ac:name='divbox' and ac:parameter[@ac:name='class' and text()!='{0}-{1}' and starts-with(., '{0}-')]]">
    </xsl:template>

    <!-- Add the option value as a metadata row in the metadata-list of the page if such macro exists on the page -->
    <xsl:template match="ac:structured-macro[@ac:name='metadata-list']/ac:plain-text-body[contains(., 'ProjectName')]/text()">
        <xsl:value-of select="concat(., '&#10;|| {0} | {1} | ')"/>
    </xsl:template>
        
    <!-- Copy everything else as is -->   
    <xsl:template match="@*|node()">
        <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>