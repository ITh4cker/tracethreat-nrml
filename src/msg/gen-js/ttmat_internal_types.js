//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


InvalidOperation = function(args) {
  this.what = null;
  this.why = null;
  if (args) {
    if (args.what !== undefined) {
      this.what = args.what;
    }
    if (args.why !== undefined) {
      this.why = args.why;
    }
  }
};
Thrift.inherits(InvalidOperation, Thrift.TException);
InvalidOperation.prototype.name = 'InvalidOperation';
InvalidOperation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.what = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.why = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

InvalidOperation.prototype.write = function(output) {
  output.writeStructBegin('InvalidOperation');
  if (this.what !== null && this.what !== undefined) {
    output.writeFieldBegin('what', Thrift.Type.I32, 1);
    output.writeI32(this.what);
    output.writeFieldEnd();
  }
  if (this.why !== null && this.why !== undefined) {
    output.writeFieldBegin('why', Thrift.Type.STRING, 2);
    output.writeString(this.why);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MessageTTMAT = function(args) {
  this.subject = null;
  this.detail = null;
  this.status = null;
  this.date = null;
  if (args) {
    if (args.subject !== undefined) {
      this.subject = args.subject;
    }
    if (args.detail !== undefined) {
      this.detail = args.detail;
    }
    if (args.status !== undefined) {
      this.status = args.status;
    }
    if (args.date !== undefined) {
      this.date = args.date;
    }
  }
};
MessageTTMAT.prototype = {};
MessageTTMAT.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.subject = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.detail = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.status = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.date = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MessageTTMAT.prototype.write = function(output) {
  output.writeStructBegin('MessageTTMAT');
  if (this.subject !== null && this.subject !== undefined) {
    output.writeFieldBegin('subject', Thrift.Type.STRING, 1);
    output.writeString(this.subject);
    output.writeFieldEnd();
  }
  if (this.detail !== null && this.detail !== undefined) {
    output.writeFieldBegin('detail', Thrift.Type.STRING, 2);
    output.writeString(this.detail);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRING, 3);
    output.writeString(this.status);
    output.writeFieldEnd();
  }
  if (this.date !== null && this.date !== undefined) {
    output.writeFieldBegin('date', Thrift.Type.STRING, 4);
    output.writeString(this.date);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MailboxTTMAT = function(args) {
  this.user = null;
  this.messageTTMAT = null;
  if (args) {
    if (args.user !== undefined) {
      this.user = args.user;
    }
    if (args.messageTTMAT !== undefined) {
      this.messageTTMAT = args.messageTTMAT;
    }
  }
};
MailboxTTMAT.prototype = {};
MailboxTTMAT.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.user = new User();
        this.user.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.messageTTMAT = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new MessageTTMAT();
          elem6.read(input);
          this.messageTTMAT.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MailboxTTMAT.prototype.write = function(output) {
  output.writeStructBegin('MailboxTTMAT');
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRUCT, 1);
    this.user.write(output);
    output.writeFieldEnd();
  }
  if (this.messageTTMAT !== null && this.messageTTMAT !== undefined) {
    output.writeFieldBegin('messageTTMAT', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.messageTTMAT.length);
    for (var iter7 in this.messageTTMAT)
    {
      if (this.messageTTMAT.hasOwnProperty(iter7))
      {
        iter7 = this.messageTTMAT[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
