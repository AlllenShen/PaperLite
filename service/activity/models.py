from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, Column, ForeignKey
from sqlalchemy.types import String, Text, TIMESTAMP, Integer, DateTime, Boolean
from sqlalchemy.orm import relationship, sessionmaker

uri = 'mysql+pymysql://root:0912@127.0.0.1:3306/activity?charset=utf8'
engine = create_engine(uri)
Base = declarative_base(engine)
session_factory = sessionmaker(engine)

class Academy(Base):
    __tablename__ = 'academy'

    id = Column(String(32), primary_key=True)
    name = Column(String(32))
    students = relationship('Student')

class Organization(Base):
    __tablename__ = 'organization'
    id = Column(String(32), primary_key=True)
    name = Column(String(32))

# class Professionals(Base):
#     __tablename__ = 'professional'
#
#     college = Column(ForeignKey(Colleges.id))
#     id = Column(Integer, primary_key=True)
#     name = Column(String(32))
#     cls = relationship('Cls')
#     students = relationship('Students')
#
# class Cls(Base):
#     __tablename__ = 'cls'
#
#     id = Column(Integer, primary_key=True)
#     college = Column(ForeignKey(Colleges.id))
#     professional = Column(ForeignKey(Professionals.id))
#     name = Column(String(32))
#     students = relationship('Students')


class Student(Base):
    __tablename__ = 'student'

    id = Column(String(32), index=True)
    sno = Column(String(64), primary_key=True)
    name = Column(String(64))
    phone = Column(String(32))
    email = Column(String(32))
    academy_id = Column(ForeignKey(Academy.id))
    major = Column(String(32))
    cls = Column(String(32))
    joined = relationship('Activity', secondary='join')
    gender = Column(Integer)

class Group(Base):
    __tablename__ = 'group'

    id = Column(Integer, primary_key=True)
    parent = Column(ForeignKey('group.id'))
    children = relationship('Group')

class Type(Base):
    __tablename__ = 'type'

    id = Column(Integer, primary_key=True)
    name = Column(String(32))

class Teacher(Base):
    __tablename__ = 'teacher'

    id = Column(String(32), primary_key=True)
    name = Column(String(32))
    phone = Column(String(32))
    department = Column(String(32))
    work_no = Column(String(32))


class Activity(Base):
    __tablename__ = 'activity'

    id = Column(String(32), primary_key=True)
    title = Column(String(64))
    apply_begin_at = Column(DateTime)
    apply_end_at = Column(DateTime)
    created_at = Column(DateTime)
    capacity = Column(Integer)
    organization_id = Column(ForeignKey(Organization.id))
    position = Column(String(64))
    avatar = Column(String(128))
    type_id = Column(ForeignKey(Type.id))
    total_member = Column(Integer)
    effect_score = Column(Integer)
    accepted_apply = Column(String(32))
    principal = Column(String(16))
    host = Column(String(64))
    contact = Column(String(64))
    level = Column(Integer)
    status = Column(Integer)
    category = Column(Integer)
    content = Column(Text)
    adviser = Column(ForeignKey(Teacher.id))

    joined = relationship('Student', secondary='join')


class Join(Base):
    __tablename__ = 'join'

    activity_id = Column(ForeignKey('activity.id'), primary_key=True)
    student_id = Column(ForeignKey('student.id'), primary_key=True)
    joined = Column(Boolean)
    like = Column(Boolean)
    comment = Column(String(1024))
    rate = Column(Integer)


if __name__ == '__main__':
    Base.metadata.create_all()