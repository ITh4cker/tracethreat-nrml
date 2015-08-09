/**
 * Autogenerated by Thrift Compiler (1.0.0-dev)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
#ifndef ttmat_internal_TYPES_H
#define ttmat_internal_TYPES_H

#include <thrift/Thrift.h>
#include <thrift/TApplicationException.h>
#include <thrift/protocol/TProtocol.h>
#include <thrift/transport/TTransport.h>

#include <thrift/cxxfunctional.h>
#include "authenication_types.h"


namespace ttmat {

typedef std::vector<class MessageTTMAT>  messageTTMATList;

typedef struct _InvalidOperation__isset {
  _InvalidOperation__isset() : what(false), why(false) {}
  bool what;
  bool why;
} _InvalidOperation__isset;

class InvalidOperation : public ::apache::thrift::TException {
 public:

  static const char* ascii_fingerprint; // = "3F5FC93B338687BC7235B1AB103F47B3";
  static const uint8_t binary_fingerprint[16]; // = {0x3F,0x5F,0xC9,0x3B,0x33,0x86,0x87,0xBC,0x72,0x35,0xB1,0xAB,0x10,0x3F,0x47,0xB3};

  InvalidOperation() : what(0), why() {
  }

  virtual ~InvalidOperation() throw() {}

  int32_t what;
  std::string why;

  _InvalidOperation__isset __isset;

  void __set_what(const int32_t val) {
    what = val;
  }

  void __set_why(const std::string& val) {
    why = val;
  }

  bool operator == (const InvalidOperation & rhs) const
  {
    if (!(what == rhs.what))
      return false;
    if (!(why == rhs.why))
      return false;
    return true;
  }
  bool operator != (const InvalidOperation &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const InvalidOperation & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

void swap(InvalidOperation &a, InvalidOperation &b);

typedef struct _MessageTTMAT__isset {
  _MessageTTMAT__isset() : subject(false), detail(false), status(false), date(false) {}
  bool subject;
  bool detail;
  bool status;
  bool date;
} _MessageTTMAT__isset;

class MessageTTMAT {
 public:

  static const char* ascii_fingerprint; // = "C93D890311F28844166CF6E571EB3AC2";
  static const uint8_t binary_fingerprint[16]; // = {0xC9,0x3D,0x89,0x03,0x11,0xF2,0x88,0x44,0x16,0x6C,0xF6,0xE5,0x71,0xEB,0x3A,0xC2};

  MessageTTMAT() : subject(), detail(), status(), date() {
  }

  virtual ~MessageTTMAT() throw() {}

  std::string subject;
  std::string detail;
  std::string status;
  std::string date;

  _MessageTTMAT__isset __isset;

  void __set_subject(const std::string& val) {
    subject = val;
  }

  void __set_detail(const std::string& val) {
    detail = val;
  }

  void __set_status(const std::string& val) {
    status = val;
  }

  void __set_date(const std::string& val) {
    date = val;
  }

  bool operator == (const MessageTTMAT & rhs) const
  {
    if (!(subject == rhs.subject))
      return false;
    if (!(detail == rhs.detail))
      return false;
    if (!(status == rhs.status))
      return false;
    if (!(date == rhs.date))
      return false;
    return true;
  }
  bool operator != (const MessageTTMAT &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const MessageTTMAT & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

void swap(MessageTTMAT &a, MessageTTMAT &b);

typedef struct _MailboxTTMAT__isset {
  _MailboxTTMAT__isset() : user(false), messageTTMAT(false) {}
  bool user;
  bool messageTTMAT;
} _MailboxTTMAT__isset;

class MailboxTTMAT {
 public:

  static const char* ascii_fingerprint; // = "8A4855A664E893C7EC67EDE22A049242";
  static const uint8_t binary_fingerprint[16]; // = {0x8A,0x48,0x55,0xA6,0x64,0xE8,0x93,0xC7,0xEC,0x67,0xED,0xE2,0x2A,0x04,0x92,0x42};

  MailboxTTMAT() {
  }

  virtual ~MailboxTTMAT() throw() {}

   ::authentication::User user;
  messageTTMATList messageTTMAT;

  _MailboxTTMAT__isset __isset;

  void __set_user(const  ::authentication::User& val) {
    user = val;
  }

  void __set_messageTTMAT(const messageTTMATList& val) {
    messageTTMAT = val;
  }

  bool operator == (const MailboxTTMAT & rhs) const
  {
    if (!(user == rhs.user))
      return false;
    if (!(messageTTMAT == rhs.messageTTMAT))
      return false;
    return true;
  }
  bool operator != (const MailboxTTMAT &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const MailboxTTMAT & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

void swap(MailboxTTMAT &a, MailboxTTMAT &b);

} // namespace

#endif