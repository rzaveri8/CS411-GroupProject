#create a package so that we have some sort of dependency managemen

from setuptools import setup

setup(name="Indeed Data",
      version="0,1",
      description="Pull job data from Indeed",
      author="Manuja DeSilva",
      packages=["indeed-data"],
      install_requires=[
      'selenium',
      ]
    );
