function Page(title, body, spaceKey, parentId) {
  this.setTitle(title);
  this.setBody(body);
  this.setSpaceKey(spaceKey);
  this.setParentId(parentId);
  this.type = "page";
};
Page.prototype.toString = function() {
  return JSON.stringify(this);
};
Page.prototype._setId = function(id) {
    this.id=id;
    return this;
}
Page.prototype.setParentId = function(parentId) {
    this.ancestors = [ { id: parentId}];
    return this;
};
Page.prototype.setSpaceKey = function(spaceKey) {
    this.space = {
        key: spaceKey
    };
    return this;
};
Page.prototype.setBody = function(body) {
    this.body = { 
        storage: { 
          representation: "storage",
          value: body
        }
    };
    return this;
};
Page.prototype.setBodyFromPage = function(page) {
    return this.setBody(page.body && page.body.storage ? page.body.storage.value : null);
}
Page.prototype.setTitle = function(title) {
    this.title = title;
    return this;
};
Page.prototype.setVersion = function(versionNumber, message, isMajorEdit) {
    this.version = {
        number: versionNumber,
        minorEdit: true
    };
    if (message) {
        this.version.message = message;
    }
    if (isMajorEdit) {
        this.version.minorEdit = false;
    }
    return this;
}
// static builder
Page.copyFrom = function(page) {
    let spaceKey = page.space ? page.space.key : '';
    let parentId = page.ancestors && page.ancestors.length ? page.ancestors[0].id : 0;
    let body = page.body && page.body.storage ? page.body.storage.value : null;
    return new Page(page.title, body, spaceKey, parentId);
};
Page.newVersionOf = function(page, message, isMajorEdit) {
    return Page.copyFrom(page)._setId(page.id).setVersion(page.version.number+1, message, isMajorEdit);
}
export default Page;