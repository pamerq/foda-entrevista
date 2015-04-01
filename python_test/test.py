#!/usr/bin/python
# -*- coding: UTF-8 -*-

import unittest


def split_bill(price, discount, people):
    list_price = list()
    if(price<=0): return list_price
    if(discount<0): return list_price;
	if(len(people)<=0): return list_price;
	total=0;
    for person in people:
		total=total+person
	if(round(total)<>1): return list_price

    new_price = price * (1 - (discount / float(100)))
    for person in people:
        list_price.append(new_price * person)
    return list_price


class SplitBillTestCase(unittest.TestCase):
    def setUp(self):
        return

    def test_wrong_split(self):
        s = split_bill(price=149.99, discount=15, people=[(1 / 2), (1 / 6), (1 / 6), (1 / 6)])
        s = sum(s)
        self.assertEquals(s, 127.49)

    def test_right_sum(self):
        s = split_bill(price=149.99, discount=15, people=[(1 / 7), (2 / 7), (1 / 7), (3 / 7)])
        s = sum(s)
        self.assertEquals(s, 127.49)

    def test_wrong_sum(self):
        s = split_bill(price=1, discount=0,
                       people=[(1 / 10), (1 / 10), (1 / 10), (1 / 10), (1 / 10),
                               (1 / 10), (1 / 10), (1 / 10), (1 / 10), (1 / 10)])
        s = sum(s)
        self.assertEquals(s, 1)

import sys
import getopt


class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg


def main(argv=None):
    if argv is None:
        argv = sys.argv
    try:
        try:
            opts, args = getopt.getopt(argv[1:], 'h', ['help'])
        except getopt.error, msg:
            raise Usage(msg)
        # more code, unchanged
        # print sum([.4, .5, .1]) == 1
        unittest.main()

    except Usage, err:
        print >> sys.stderr, err.msg
        print >> sys.stderr, 'for help use --help'
        return 2


if __name__ == '__main__':
    sys.exit(main())
